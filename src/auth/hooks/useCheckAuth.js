 
function useCheckAuth() {	
	 
	const lsuser = JSON.parse(localStorage.getItem('session_app'));
	 
	return lsuser;
}

export default useCheckAuth;