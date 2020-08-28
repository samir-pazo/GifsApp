import React from 'react'

const LoginScreem = ({ history }) => {


    const handleSubmit = (e)=> {
        e.preventDefault();
        const lastPath = localStorage.getItem("lastPath") || "/";

        history.replace( lastPath );
    }

    return (
        <div>
            <h2>Ingresa con tu cuenta</h2>
            <form onSubmit={ handleSubmit }>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Ingresa tu correo" 
                        type="text"
                        />
                   
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Ingresa tu clave" 
                        type="password"
                        />
                </div>
                <button className="btn btn-primary block">Ingresar</button>
            </form>
        </div>
    )
}

export default LoginScreem
