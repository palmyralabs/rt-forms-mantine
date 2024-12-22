const getVariantClassName = (variant: string, label: string) => {
    if (!label) return '';

    switch (variant) {
        case 'outlined':
            return "text-view-value-outlined";
        case 'filled':
            return "text-view-value-filled";
        default:
            return "text-view-value";
    }
};

export { getVariantClassName }