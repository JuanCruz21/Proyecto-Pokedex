import React, { useState } from 'react';
import './AddPokemons.css';

const AddPokemons = () => {
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [malo, setMalo] = useState(false);
    const [bueno, setBueno] = useState(false);
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [categoria, setCategoria] = useState('');
    const [habilidad, setHabilidad] = useState('');
    const [sexo, setSexo] = useState('');
    const [tipos, setTipos] = useState('');
    const [debilidades, setDebilidades] = useState('');
    const [ps, setPs] = useState('');
    const [ataque, setAtaque] = useState('');
    const [defensa, setDefensa] = useState('');
    const [ataqueEspecial, setAtaqueEspecial] = useState('');
    const [defensaEspecial, setDefensaEspecial] = useState('');
    const [velocidad, setVelocidad] = useState('');
    const [evoluciones, setEvoluciones] = useState([]);
    const [imageInputs, setImageInputs] = useState([{ image: '', title: '' }]);

    const handleImageChange = (index, event) => {
        const { name, value } = event.target;
        const updatedInputs = [...imageInputs];
        updatedInputs[index][name] = value;
        setImageInputs(updatedInputs);
    };

    const handleAddImage = () => {
        setImageInputs([...imageInputs, { image: '', title: '' }]);
    };

    const handleMainImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImage(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes hacer lo que desees con los datos ingresados en el formulario
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Imagen</label>
                    <input type="file" className="form-control-file" onChange={handleMainImageChange} accept="image/*" />
                </div>
                <div className="form-group col-md-6">
                    <label>Título</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
            </div>

            <div className="form-group">
                <label>Descripción</label>
                <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className="form-group">
                <div>
                    <label>Versiones del Pokémon:</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" checked={malo} onChange={(e) => setMalo(e.target.checked)} />
                    <label className="form-check-label">Nace malo</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" checked={bueno} onChange={(e) => setBueno(e.target.checked)} />
                    <label className="form-check-label">Nace bueno</label>
                </div>
            </div>

            <div className="form-row rounded bg-secondary p-2">
                <div className="form-group col-md-6">
                    <div className="rounded bg-secondary p-2">
                        <label>Altura</label>
                        <input type="text" className="form-control" value={altura} onChange={(e) => setAltura(e.target.value)} />
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <label>Peso</label>
                    <input type="text" className="form-control" value={peso} onChange={(e) => setPeso(e.target.value)} />
                </div>
                <div className="form-group col-md-6">
                    <label>Categoría</label>
                    <input type="text" className="form-control" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
                </div>
                <div className="form-group col-md-6">
                    <label>Habilidad</label>
                    <input type="text" className="form-control" value={habilidad} onChange={(e) => setHabilidad(e.target.value)} />
                </div>


                <label>Sexo</label>
                <input type="text" className="form-control" value={sexo} onChange={(e) => setSexo(e.target.value)} />

            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Tipo</label>
                    <input type="text" className="form-control" value={tipos} onChange={(e) => setTipos(e.target.value)} />
                </div>

            </div>

            <div className="form-row">

                <div className="form-group col-md-6">
                    <label>Debilidad</label>
                    <input type="text" className="form-control" value={debilidades} onChange={(e) => setDebilidades(e.target.value)} />
                </div>
            </div>
            <div className="form-group">
                <label>Puntos Bases</label>
                <div>
                    <input type="text" className="form-control" value={ps} onChange={(e) => setPs(e.target.value)} placeholder="PS" />
                    <input type="text" className="form-control" value={ataque} onChange={(e) => setAtaque(e.target.value)} placeholder="Ataque" />
                    <input type="text" className="form-control" value={defensa} onChange={(e) => setDefensa(e.target.value)} placeholder="Defensa" />
                    <input type="text" className="form-control" value={ataqueEspecial} onChange={(e) => setAtaqueEspecial(e.target.value)} placeholder="Ataque Especial" />
                    <input type="text" className="form-control" value={defensaEspecial} onChange={(e) => setDefensaEspecial(e.target.value)} placeholder="Defensa Especial" />
                    <input type="text" className="form-control" value={velocidad} onChange={(e) => setVelocidad(e.target.value)} placeholder="Velocidad" />
                </div>
            </div>

            {imageInputs.map((input, index) => (
                <div className="form-row" key={index}>
                    <div className="form-group col-md-4">
                        <label>Imagen de la evolución {index + 1}</label>
                        <input
                            type="file"
                            name="image"
                            className="form-control"
                            value={input.image}
                            onChange={(event) => handleImageChange(index, event)}
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label>Título de la evolución {index + 1}</label>
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            value={input.title}
                            onChange={(event) => handleImageChange(index, event)}
                        />
                    </div>
                </div>
            ))}

            <button type="button" className="btn btn-primary" onClick={handleAddImage}>
                Agregar Evolucion
            </button>
            <br /><br />

            <center >
                <button type="submit" className="btn btn-primary">Enviar</button>

                <button type="submit" className="btn btn-danger">Cancelar</button>
            </center>
        </form>
    );
};

export default AddPokemons;
