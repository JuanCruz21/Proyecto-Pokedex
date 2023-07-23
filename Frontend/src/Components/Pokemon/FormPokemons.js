import React, {  useState } from 'react';
import { agregarPokemon } from '../../Api/PokemonsApi';
import { useNavigate } from 'react-router-dom';

function FormPokemons() {
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState({
        id_: null,
        codigo:'',
        nombre: '',
        descripcion: '',
        altura: '',
        peso: '',
        especie: '',
        habilidades_especiales: '',
        sexo: '',
        tipo: '',
        debilidad: '',
    });

    const handleChange = (e) => {
        setPokemon({
            ...pokemon,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await agregarPokemon(pokemon);
        navigate('/Pokemons');
        console.log(response)
    };

    return (
        <div>
            <div className="col-xxl" id="agregarPokemon">
                <div className="card mb-4">
                    <div className="card-header d-flex align-items-center justify-content-between">
                        <h5 className="mb-0">Agregar Pokemon</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Código del Pokemon</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="codigo"
                                        name="codigo"
                                        placeholder="Digite el nombre del pokemon"
                                        onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Nombre del Pokemon</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nombre"
                                        name="nombre"
                                        placeholder="Digite el nombre del pokemon"
                                        onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Descripción</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="descripcion"
                                        name="descripcion"
                                        placeholder="Digite la descripcion del pokemon"
                                        onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Altura (cm)</label>
                                <div className="col-sm-10">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="altura"
                                        name="altura"
                                        placeholder="Digite la altura del pokemon en cm"
                                        onChange={handleChange} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Peso (Kg)</label>
                                <div className="col-sm-10">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="peso"
                                        name="peso"
                                        placeholder="Digite el peso del pokemon en kg"
                                        onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Especie del pokemon</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="especie"
                                        name="especie"
                                        placeholder="Digite la especie del pokemon"
                                        onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Habilidades Especiales</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="habilidades_especiales"
                                        name="habilidades_especiales"
                                        placeholder="Digite las habilidades especiales del pokemon"
                                        onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Sexo</label>
                                <div className="col-sm-10">
                                    <select
                                        className="form-select"
                                        id="sexo"
                                        name="sexo"
                                        onChange={handleChange}>
                                        <option selected="">Seleccionar Opción</option>
                                        <option value="Femenino">Femenino</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Ambas">Masculino y Femenino</option>
                                        <option value="Desconocido">Desconocido</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Tipo</label>
                                <div className="col-sm-10">
                                    <select
                                        className="form-select"
                                        id="tipo"
                                        name="tipo"
                                        onChange={handleChange}>
                                        <option selected="">Seleccionar Opción</option>
                                        <option value="Rayo">Rayo</option>
                                        <option value="Hielo">Hielo</option>
                                        <option value="Fuego">Fuego</option>
                                        <option value="Agua">Agua</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Debilidad</label>
                                <div className="col-sm-10">
                                <select
                                        className="form-select"
                                        id="debilidad"
                                        name="debilidad"
                                        onChange={handleChange}>
                                        <option selected="">Seleccionar Opción</option>
                                        <option value="Rayo">Rayo</option>
                                        <option value="Hielo">Hielo</option>
                                        <option value="Fuego">Fuego</option>
                                    </select>
                                    </div>
                                </div>

                            <div className="row justify-content-end">
                                <div className="col-sm-10">
                                    <button type="submit" className="btn btn-primary">Guardar</button>
                                    <a href="/" className="btn btn-danger">Cancelar</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormPokemons;
