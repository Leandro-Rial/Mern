import React, {useState} from 'react';
import axios from 'axios';

const CreateOpinion = () => {

    const [opinions, setOpinions] = useState({
        title: '',
        body: ''
    });

    const onChangeInput = async (e) => {
        const {name, value} = e.target;
        setOpinions({ ...opinions, [name]:value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            
            await axios.post('/opinions/add', {...opinions})

            window.location.href = '/'

        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    return (
        <div className="create_product">
            <form onSubmit={onSubmit}>
                
                <h1>Create an Opinion</h1>

                <div className="row">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={opinions.title} onChange={onChangeInput} required />
                </div>

                <div className="row">
                    <label htmlFor="body">Description</label>
                    <textarea name="body" rows="5" value={opinions.body} onChange={onChangeInput} required />
                </div>

                <button type="submit">Create</button>

            </form>
        </div>
    )
}

export default CreateOpinion
