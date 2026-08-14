import { Checkbox, TextInput } from "@mantine/core";
import { ColumnDefinition } from "@palmyralabs/rt-forms";
import { RefObject, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbColumns, TbSearch } from "react-icons/tb";
import { DropdownButton, IDropdown } from "../../widget";
import './ColumnChooserButton.css';
import { ColumnVisibility, getColumnId } from "./useColumnChooser";

// Animate a DOM-mutating state change with the View Transitions API when available, so
// columns crossfade smoothly on show AND hide. flushSync forces React to commit the change
// synchronously inside the transition. Falls back to a plain update where unsupported /
// when the user prefers reduced motion.
const runWithTransition = (mutate: () => void) => {
    const doc: any = typeof document !== 'undefined' ? document : null;
    const reduce = typeof window !== 'undefined' && !!window.matchMedia
        && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (doc && typeof doc.startViewTransition === 'function' && !reduce) {
        doc.startViewTransition(() => flushSync(mutate));
    } else {
        mutate();
    }
};

interface ColumnGroup {
    name: string;
    columns: ColumnDefinition[];
}

export interface ColumnChooserButtonProps {
    columns: ColumnDefinition[];
    visibility?: ColumnVisibility;
    onVisibilityChange?: (v: ColumnVisibility) => void;
    tableRef?: RefObject<any>;
    title?: string;
    ungroupedLabel?: string;
    width?: string;
    searchable?: boolean;
}

const buildGroups = (columns: ColumnDefinition[], ungroupedLabel: string): ColumnGroup[] => {
    const order: string[] = [];
    const map: Record<string, ColumnDefinition[]> = {};
    columns.forEach((col) => {
        const g = (col as any).columnGroup || ungroupedLabel;
        if (!map[g]) { map[g] = []; order.push(g); }
        map[g].push(col);
    });
    return order.map((name) => ({ name, columns: map[name] }));
};

const isVisible = (visibility: ColumnVisibility, id: string): boolean => visibility[id] !== false;

const ColumnChooserButton = (props: ColumnChooserButtonProps) => {
    const buttonRef: any = useRef<IDropdown>(null);
    const { columns } = props;
    const ungroupedLabel = props.ungroupedLabel || 'Columns';
    const searchable = props.searchable !== false;

    const [search, setSearch] = useState('');
    const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
    const toggleCollapse = (name: string) =>
        setCollapsed((c) => ({ ...c, [name]: !c[name] }));

    const controlled = !!props.onVisibilityChange;
    const [internalVisibility, setInternalVisibility] = useState<ColumnVisibility>({});
    const visibility: ColumnVisibility = controlled ? (props.visibility || {}) : internalVisibility;

    const onVisibilityChange = (v: ColumnVisibility) => {
        runWithTransition(() => {
            if (controlled) {
                props.onVisibilityChange!(v);
            } else {
                setInternalVisibility(v);
                const table = props.tableRef?.current;
                if (table && typeof table.setColumnVisibility === 'function') {
                    table.setColumnVisibility(v);
                }
            }
        });
    };

    const q = search.trim().toLowerCase();
    const matches = (col: ColumnDefinition) => {
        if (!q) return true;
        const label = String(col.label || getColumnId(col)).toLowerCase();
        return label.includes(q) || getColumnId(col).toLowerCase().includes(q);
    };

    const groups = useMemo(() => buildGroups(columns, ungroupedLabel), [columns, ungroupedLabel]);
    const filteredGroups = groups
        .map((g) => ({ name: g.name, columns: g.columns.filter(matches) }))
        .filter((g) => g.columns.length > 0);

    const visibleCount = columns.reduce(
        (n, c) => (isVisible(visibility, getColumnId(c)) ? n + 1 : n), 0);
    const allVisible = visibleCount === columns.length;
    const noneOrSome = visibleCount > 0 && visibleCount < columns.length;

    const setColumn = (id: string, checked: boolean) => {
        onVisibilityChange({ ...visibility, [id]: checked });
    };

    const setAll = (checked: boolean) => {
        if (checked) {
            onVisibilityChange({});
        } else {
            const next: ColumnVisibility = {};
            columns.forEach((c) => { next[getColumnId(c)] = false; });
            onVisibilityChange(next);
        }
    };

    const setGroup = (group: ColumnGroup, checked: boolean) => {
        const next: ColumnVisibility = { ...visibility };
        group.columns.forEach((c) => { next[getColumnId(c)] = checked; });
        onVisibilityChange(next);
    };

    const groupState = (group: { columns: ColumnDefinition[] }) => {
        const vis = group.columns.filter((c) => isVisible(visibility, getColumnId(c))).length;
        return { all: vis === group.columns.length, some: vis > 0 && vis < group.columns.length };
    };

    // collapse / expand ALL groups (the arrow to the left of the master checkbox)
    const collapsibleNames = groups.filter((g) => g.name !== ungroupedLabel).map((g) => g.name);
    const anyExpanded = collapsibleNames.some((name) => !collapsed[name]);
    const toggleAll = () => {
        if (anyExpanded) {
            const next: Record<string, boolean> = {};
            collapsibleNames.forEach((n) => { next[n] = true; });
            setCollapsed(next);
        } else {
            setCollapsed({});
        }
    };

    const columnRow = (col: ColumnDefinition, child: boolean) => {
        const id = getColumnId(col);
        const v = isVisible(visibility, id);
        return (
            <div className={'py-cc-row' + (child ? ' py-cc-row-child' : '')} key={id}>
                <Checkbox radius="sm" size="sm" className="py-cc-cb"
                    checked={v} onChange={(e) => setColumn(id, e.currentTarget.checked)} />
                <span className="py-cc-name" onClick={() => setColumn(id, !v)}>{col.label || id}</span>
            </div>
        );
    };

    return (
        <DropdownButton title={props.title || 'Columns'} ref={buttonRef}
            PrefixAdornment={<TbColumns />} width={props.width || '300'}>
            <div className="py-column-chooser" onMouseDown={(e) => e.stopPropagation()}>
                <div className="py-cc-top">
                    {collapsibleNames.length > 0 && (
                        <button type="button" className="py-cc-arrow-btn"
                            aria-label={anyExpanded ? 'Collapse all' : 'Expand all'}
                            aria-expanded={anyExpanded}
                            onClick={toggleAll}>
                            <MdKeyboardArrowDown
                                className={'py-cc-arrow' + (anyExpanded ? ' open' : '')} />
                        </button>
                    )}
                    <Checkbox radius="sm" size="sm" className="py-cc-cb py-cc-master"
                        checked={allVisible}
                        indeterminate={noneOrSome}
                        aria-label="Select all columns"
                        onChange={(e) => setAll(e.currentTarget.checked)}
                    />
                    {searchable && (
                        <TextInput
                            className="py-cc-search"
                            size="xs"
                            radius="md"
                            placeholder="Search..."
                            value={search}
                            leftSection={<TbSearch size={14} />}
                            onChange={(e) => setSearch(e.currentTarget.value)}
                        />
                    )}
                </div>

                <div className="py-cc-scroll">
                    {filteredGroups.length === 0 && (
                        <div className="py-cc-empty">No columns found</div>
                    )}
                    {filteredGroups.map((group) => {
                        const isUngrouped = group.name === ungroupedLabel;
                        if (isUngrouped) {
                            return (
                                <div key={group.name}>
                                    {group.columns.map((col) => columnRow(col, false))}
                                </div>
                            );
                        }
                        const gs = groupState(group);
                        const expanded = !!q || !collapsed[group.name];
                        return (
                            <div className="py-cc-group" key={group.name}>
                                <div className="py-cc-row py-cc-row-group">
                                    <button type="button" className="py-cc-arrow-btn"
                                        aria-label={expanded ? 'Collapse' : 'Expand'}
                                        aria-expanded={expanded}
                                        onClick={() => toggleCollapse(group.name)}>
                                        <MdKeyboardArrowDown
                                            className={'py-cc-arrow' + (expanded ? ' open' : '')} />
                                    </button>
                                    <Checkbox radius="sm" size="sm" className="py-cc-cb"
                                        checked={gs.all}
                                        indeterminate={gs.some}
                                        onChange={(e) => setGroup(group as ColumnGroup, e.currentTarget.checked)}
                                    />
                                    <span className="py-cc-name py-cc-group-name"
                                        onClick={() => setGroup(group as ColumnGroup, !gs.all)}>
                                        {group.name}
                                    </span>
                                </div>
                                <div className={'py-cc-collapse' + (expanded ? ' open' : '')}>
                                    <div className="py-cc-collapse-inner">
                                        {group.columns.map((col) => columnRow(col, true))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="py-cc-footer">
                    <button type="button" className="py-cc-reset" onClick={() => setAll(true)}>
                        Show all
                    </button>
                </div>
            </div>
        </DropdownButton>
    );
};

export { ColumnChooserButton };
