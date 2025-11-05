import React, { useContext, useState } from "react";
import { ContentContext } from "../ContentContext";

const AdminContactEditor = () => {
  const { content, save } = useContext(ContentContext);
  const [address, setAddress] = useState(content?.contact?.address || "");
  const [email, setEmail] = useState(content?.contact?.email || "");
  const [phonePrimary, setPhonePrimary] = useState(content?.contact?.phonePrimary || "");
  const [phoneSecondary, setPhoneSecondary] = useState(content?.contact?.phoneSecondary || "");

  const handleSave = () => {
    save("contact.address", address);
    save("contact.email", email);
    save("contact.phonePrimary", phonePrimary);
    save("contact.phoneSecondary", phoneSecondary);
    alert("Contact info saved.");
  };

  return (
    <div>
      <h2 className="mb-3">Contact Editor</h2>
      <div className="row g-3">
        <div className="col-md-12">
          <label className="form-label">Address</label>
          <input className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="col-md-3">
          <label className="form-label">Phone (Primary)</label>
          <input className="form-control" value={phonePrimary} onChange={(e) => setPhonePrimary(e.target.value)} />
        </div>
        <div className="col-md-3">
          <label className="form-label">Phone (Secondary)</label>
          <input className="form-control" value={phoneSecondary} onChange={(e) => setPhoneSecondary(e.target.value)} />
        </div>
      </div>
      <button className="btn btn-dark mt-3" onClick={handleSave}>Save</button>
    </div>
  );
};

export default AdminContactEditor;


