export const base = {
    device: {
        tablet: `(min-width:768px)`,
        laptop: `(min-width:1270)`,
    },
    blur:'blur(5px)',
}

export const light = {
    darkBlue: 'hsl(233, 26%, 24%)',
    limeGreen: 'hsl(136, 65%, 51%)',
    brightCyan: 'hsl(192, 70%, 51%)',
    grayishBlue: 'hsl(233, 8%, 62%)',
    lightGrayishBlue: 'hsl(220, 16%, 96%)',
    veryLightGray: 'hsl(0, 0%, 98%)',
    white: 'hsl(0, 0%, 100%)',
    background:{
        overlay: 'rgba(0, 0, 0, .6);',
    },

}

export const dark = {

}

export const lightTheme = {
    ...base,
    color: {
        ...light
    }
};

export const darkTheme = {
    ...base,
    color: {
        ...dark
    }
}

