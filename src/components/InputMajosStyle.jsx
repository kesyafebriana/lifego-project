const InputMajorStyle = {
    control: (styles) => (
        {
            ...styles,
            backgroundColor: "#C5D272",
            borderRadius: 15,
            border: "3px solid #A1AD53",
            outline: "5px solid #F3ECD9",
            boxShadow: "3px 3px 2px 2px #a7a7a7",
            paddingLeft: 7,
            height: 30
        }
    ),
    placeholder: (styles) => (
        {
            ...styles,
            color: "#F3ECD9",
            paddingBottom: 8
        }
    ),
    dropdownIndicator: (styles) => (
        {
            ...styles,
            backgroundColor: "#A1AD53",
            borderTopRightRadius: 5,
            height: 37,
            width: 65,
            marginBottom: 4,
            paddingLeft: 20
        }
    )
}

export default InputMajorStyle;