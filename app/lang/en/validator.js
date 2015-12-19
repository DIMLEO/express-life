module.exports = {
    accepted         : "The :attribute must be accepted.",
    alpha            : "The :attribute may only contain letters.",
    alpha_dash       : "The :attribute may only contain letters, numbers, and dashes.",
    alpha_num        : "The :attribute may only contain letters and numbers.",
    array            : "The :attribute must be an array.",
    object           : "The :attribute must be an object.",
    between          : {
        numeric : "The :attribute must be between :min and :max.",
        string  : "The :attribute must be between :min and :max characters.",
        array   : "The :attribute must have between :min and :max items."
    },
    confirmed        : "The :attribute confirmation does not match.",
    different        : "The :attribute and :other must be different.",
    digits           : "The :attribute must be :digits digits.",
    digits_between   : "The :attribute must be between :min and :max digits.",
    email           : "The :attribute format is invalid.",
    allow            : "The selected :attribute is invalid.",
    integer          : "The :attribute must be an integer.",
    ip               : "The :attribute must be a valid IP address.",
    max              : {
        numeric : "The :attribute may not be greater than :max.",
        string  : "The :attribute may not be greater than :max characters.",
        array   : "The :attribute may not have more than :max items."
    },
    min              : {
        numeric : "The :attribute must be at least :min.",
        string  : "The :attribute must be at least :min characters.",
        array   : "The :attribute must have at least :min items."
    },
    not_in           : "The selected :attribute is invalid.",
    numeric          : "The :attribute must be a number.",
    regex            : "The :attribute format is invalid.",
    required         : "The :attribute field is required.",
    required_if      : "The :attribute field is required when :other is :value.",
    required_with    : "The :attribute field is required when :values is present.",
    required_without : "The :attribute field is required when :values is not present.",
    same             : "The :attribute and :other must match.",
    size             : {
        numeric : "The :attribute must be :size.",
        string  : "The :attribute must be :size characters.",
        array   : "The :attribute must contain :size items."
    },
    url              : "The :attribute format is invalid.",
    def              : 'The :attribute attribute has errors.'
};