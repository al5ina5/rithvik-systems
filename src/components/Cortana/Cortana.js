export default function Cortana() {
    return <>
        <style jsx>{`
            .cortana {
                display: flex;
                background-color: rgba(255, 255, 255, 0.1);
            }
            
            input {
                width: 130px;
                padding: 0 1rem;
                border: 0;
                background-color: transparent;
                color: white;
                transition: 0.15s ease all;
            }

            input:focus {
                width: 200px;
            }
      `}</style>

        <div className="cortana">
            <div className="padded hover">
                <i className="far fa-circle"></i>
            </div>
            <input type="text" placeholder="Leave a comment" />
            <div className="padded hover end">
                <i className="fas fa-microphone"></i>
            </div>
        </div>
    </>
}