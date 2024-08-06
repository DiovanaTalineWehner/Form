import './MyForm.css'


const MyForm = () => {
    return (
        <div>
        <h1>Answer the form</h1>
        <form>
            <div className='questions'>
                <label htmlFor='name'>Full name:</label>
                <input type='text' name='name' placeholder='Type your name...' ></input>
                <label htmlFor='phone'>Phone number:</label>
                <input type='number' name='phone' placeholder='Enter your phone number...' ></input>
            </div>
            <div className='terms'>
                <label htmlFor='terms'>Do you agree to our <a href='#' target='_blank'>terms of use?</a></label>
                <input type='checkbox' name='terms'></input>
                <label htmlFor='terms'>Yes</label>
                <input type='checkbox' name='terms'></input>
                <label htmlFor='terms'>No</label>
                </div>
            <input className='submit' type='submit' value="Enviar"></input>
        </form>
        </div>
    )
}

export default MyForm