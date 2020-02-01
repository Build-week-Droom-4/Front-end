import React, { useState } from "react";



function Form (props) {
console.log (props);
const [member, setMember] = useState({
name: "", position: "", pay: "",
});

const handleChanges = e => {
setMember({
    ...member, [e.target.name]: e.target.value});
console.log(member);
};

const submitForm = e => {
e.preventDefault();
console.log(member)
// props.member(member)
setMember({name:"", position: "", pay:""});
}

return (
<div>
      <form onSubmit={submitForm}>
      <label htmlFor="name">Company Name</label>
      <input
        id="name"
        type="text"
        placeholder="name"
        onChange={handleChanges}
        name="name"
      />

      <label htmlFor="position">Position</label>
      <input
        id="position"
        type="text"
        placeholder="Position?"
        onChange={handleChanges}
        name="position"
      />

      <label htmlFor="pay">Pay</label>
      <input
        id="pay"
        type="text"
        placeholder="Pay?"
        onChange={handleChanges}
        name="pay"
      />
      <button type="submit">Become Member</button>
      </form>

</div>
);

}

export default Form;
