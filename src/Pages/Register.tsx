import React from "react";

function Register() {
    return(
        <div className="container text-center">
            <form method="post">
                <h1 className="mt-5">Register</h1>
                <div className="mt-5">
                    <div className="col-sm-6 offset-sm-3 col-xs-12 mt-4">
                        <input type="text" className="form-control" placeholder="Enter your name" required />
                    </div>
                    <div className="col-sm-6 offset-sm-3 col-xs-12 mt-4">
                        <input type="text" className="form-control" placeholder="Enter password" required />
                    </div>
                    <div className="col-sm-6 offset-sm-3 col-xs-12 mt-4">
                        <select className="form-control form-select">
                            <option value="">Select role</option>
                            <option value="customer">Customer</option>
                            <option value="admin">Administrator</option>
                        </select>
                    </div>
                </div>
                <div className="mt-5">
                    <button type="submit" className="btn btn-success">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register;