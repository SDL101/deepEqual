'use strict';
// Don't add or change anything above this comment.

/*
* Don't change the declaration of this function.
*/
function deepEqual(val1, val2) {
    if(val1 === val2) {
        return true;
    } else if(typeof(val1) === "object" && typeof(val2)=== "object"){
        if(val1 === null || val2 === null){
            return false;
        } else if((Array.isArray(val1) && !Array.isArray(val2)) || (!Array.isArray(val1) && Array.isArray(val2))){
            return false;
        } else {
            const props1 = Object.keys(val1)
            const props2 = Object.keys(val2)
            if (props1.length != props2.length){
                return false
            } else {
                for (const prop of props1){
                    if (props2.includes(prop)){
                        if(!deepEqual(val1[prop], val2[prop])){
                            return false;
                        }
                    } else {
                        return false;
                    }
                }
                return true;
            }
        }
    } else {
        return false;
    }
}
// Don't add or change anything below this comment.
module.exports = deepEqual;