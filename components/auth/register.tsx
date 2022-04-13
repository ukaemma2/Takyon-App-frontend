export default function Register() {
  return (
    <div>
      <div>
        <h2>Create Account</h2>
        <span>English (UK)</span>
      </div>
      <p>YOUR PERSONAL INFORMATION</p>
      <div>
        <div>
          <input placeholder="Your name" />
          <input placeholder="Your surname" />
        </div>
        <input placeholder="Your e-mail" />
        <input placeholder="Your Password" />
      </div>
      <div>
        <button>Create account</button>
        <p>or</p>
        <button>Login to your existing account</button>
      </div>
    </div>
  );
}
