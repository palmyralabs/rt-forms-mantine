const parseOptions = (options, name) => {
    if (options) {
        var keys = Object.keys(options);
        if (2 == keys.length) {
            const val = Object.values[0];
            var checked = 0;
            var unchecked = 1;
            if (val == 'false' || val == '0' || val == 0 || val == 'unchecked') {
                checked = 1; unchecked = 0;
            }
            return {
                'checked': {
                    title: keys[checked],
                    value: options[keys[checked]]
                },
                'unchecked': {
                    title: keys[unchecked],
                    value: options[keys[unchecked]]
                }
            }
        } else {
            console.error('invalid options, must contain two keys - sample - ')
            console.error({ active: 1, inactive: 0 });
        }
    } else {
        return {
            'checked': {
                title: name,
                value: 1
            },
            'unchecked': {
                title: name,
                value: 0
            }
        }
    }
}

export default parseOptions;