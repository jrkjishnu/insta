export const emailValidator = (value) => {
    if (value !== undefined && value !== "") {
      let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      return {
        required: true,
        valid: regex.test(value),
      };
    } else {
      return {
        required: false,
        valid: true,
      };
    }
  };
  