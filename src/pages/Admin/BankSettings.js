import React, { useEffect, useState } from "react";
import { api } from "../../api/client";

export default function BankSettings() {
  const [form, setForm] = useState({
    accountName: "",
    accountNumber: "",
    ifsc: "",
    bankName: "",
    branch: "",
    upiId: "",
  });
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    api.getBank().then((d) => setForm({ ...form, ...d.details }));
    // eslint-disable-next-line
  }, []);

  function change(f) {
    return (e) => setForm({ ...form, [f]: e.target.value });
  }

  async function save(e) {
    e.preventDefault();
    setBusy(true);
    setMsg("");
    try {
      await api.updateBank(form);
      setMsg("Bank details saved.");
    } catch (e) {
      setMsg(e.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="admin-page">
      <h1>Bank Settings</h1>
      <p className="sub">
        These details appear on the checkout page for customers to pay
      </p>

      {msg && <p className="checkout-error">{msg}</p>}

      <div className="detail-card">
        <form onSubmit={save}>
          <div className="update-form">
            <div>
              <label>Account Name</label>
              <input value={form.accountName} onChange={change("accountName")} />
            </div>
            <div>
              <label>Account Number</label>
              <input
                value={form.accountNumber}
                onChange={change("accountNumber")}
              />
            </div>
            <div>
              <label>IFSC</label>
              <input value={form.ifsc} onChange={change("ifsc")} />
            </div>
            <div>
              <label>Bank Name</label>
              <input value={form.bankName} onChange={change("bankName")} />
            </div>
            <div>
              <label>Branch</label>
              <input value={form.branch} onChange={change("branch")} />
            </div>
            <div>
              <label>UPI ID</label>
              <input value={form.upiId} onChange={change("upiId")} />
            </div>
          </div>
          <div className="admin-actions-row">
            <button className="act-verify" disabled={busy}>
              {busy ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}