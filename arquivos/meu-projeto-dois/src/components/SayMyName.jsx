

function SayMyName(props){
    return (
        <div>
            <p className="nomePessoa">
                Fala aí, {props.name}, suave?
            </p>
        </div>
    );
}


export default SayMyName;