const hasProfanity = (text) => {
    const profanityRegex = /shit|piss|fuck/gi;
    return profanityRegex.test(text);
};

export default function validate (inputValues, name, setErrors) {
    if (name === "rating") {
        if (inputValues.rating.length) {
        if (inputValues.rating[0] < 1 || inputValues.rating[0] > 5) {
            setErrors((prevErrors) => ({
            ...prevErrors,
            rating: "Insert a value from one to five",
            }));
        } else {
            setErrors((prevErrors) => ({
            ...prevErrors,
            rating: "",
            }));
        }
        } else {
        setErrors((prevErrors) => ({
            ...prevErrors,
            rating: "*Must select a score",
        }));
        }
    }

    if (name === "comment") {
    let comment = inputValues.comments[0].comment;
        if (comment !== "") {
        if (hasProfanity(comment)) {
            setErrors((prevErrors) => ({
            ...prevErrors,
            comment: "*Those words are not allowed",
            }));
        } else {
            setErrors((prevErrors) => ({
            ...prevErrors,
            comment: "",
            }));
        }
        } else {
        setErrors((prevErrors) => ({
            ...prevErrors,
            comment: "*Must do a review",
        }));
        }
    }
};
