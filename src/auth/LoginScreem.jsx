import React, { useContext } from 'react';
 
import { Store } from '../store/index';
import { authActions } from '../store/_actions/auth.actions';

const LoginScreem = ({ history }) => {

    const { dispatch } = useContext(Store);

    const handleSubmit = (e)=> {
        e.preventDefault();
        const lastPath = localStorage.getItem("lastPath") || "/";

        const user = {
            isAuth: true,
            name: 'Samir Pazo Torres',
            token: ''
        }

        authActions.login( user, dispatch)

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
