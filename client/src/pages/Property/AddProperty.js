import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_PROPERTY } from '../../utils/mutations';

function AddProperty(props) {
    const [formState, setFormState] = useState({ propertyType: '', landlord: '' });
    const [addProperty] = useMutation(ADD_PROPERTY);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        console.log(formState); 

        const mutationResponse = await addProperty({
            variables: {
                propertyType: formState.propertyType,
                landlord: formState.landlord,
                county: formState.county,
                address: formState.address,
                zipCode: parseInt(formState.zipCode),
                price: parseInt(formState.price),
                bedroomCount: parseInt(formState.bedroomCount),
                bathroomCount: parseInt(formState.bathroomCount),
                petsAllowed: formState.petsAllowed,
                sqFootage: parseInt(formState.sqFootage),
                depositFee: parseInt(formState.depositFee)
            },
        });
        window.location.reload(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };
    
    return (
        <div className="container my-1">
            <div className="addproperty-form">
                <h2>Add a Property</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="flex-row space-between my-2" >
                        <label htmlFor="propertyType">Property Type:</label>
                        <input
                            placeholder="House or Apartment"
                            name="propertyType"
                            type="propertyType"
                            id="propertyType"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex-row space-between my-2">
                        <label htmlFor="landlord">Landlord:</label>
                        <input
                            placeholder="Anthony Torres"
                            name="landlord"
                            type="landlord"
                            id="landlord"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex-row space-between my-2">
                        <label htmlFor="county">Connecticut County:</label>
                        <input
                            placeholder="Fairfield"
                            name="county"
                            type="county"
                            id="county"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex-row space-between my-2">
                        <label htmlFor="address">Address:</label>
                        <input
                            placeholder="123 Example Street"
                            name="address"
                            type="address"
                            id="address"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex-row space-between my-2">
                        <label htmlFor="zipCode">Zip Code:</label>
                        <input
                            placeholder="06605"
                            name="zipCode"
                            type="zipCode"
                            id="zipCode"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex-row space-between my-2">
                        <label htmlFor="price">Price Per Month:</label>
                        <input
                            placeholder="1800"
                            name="price"
                            type="price"
                            id="price"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex-row space-between my-2">
                        <label htmlFor="bedroomCount">Bedroom Count:</label>
                        <input
                            placeholder="2"
                            name="bedroomCount"
                            type="bedroomCount"
                            id="bedroomCount"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex-row space-between my-2">
                        <label htmlFor="bathroomCount">Bathroom Count:</label>
                        <input
                            placeholder="2"
                            name="bathroomCount"
                            type="bathroomCount"
                            id="bathroomCount"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex-row space-between my-2">
                        <label htmlFor="petsAllowed">Pets Allowed:</label>
                        <p>Yes: </p>
                        <input
                            placeholder="petsAllowed"
                            name="petsAllowed"
                            type="radio"
                            id="yes"
                            value="Yes"
                            onChange={handleChange}
                        />
                        <p>No: </p>
                        <input
                            placeholder="petsAllowed"
                            name="petsAllowed"
                            type="radio"
                            id="no"
                            value="No"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex-row space-between my-2">
                        <label htmlFor="sqFootage">Square Footage:</label>
                        <input
                            placeholder="2500"
                            name="sqFootage"
                            type="sqFootage"
                            id="sqFootage"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex-row space-between my-2">
                        <label htmlFor="depositFee">Deposit Fee:</label>
                        <input
                            placeholder="3600"
                            name="depositFee"
                            type="depositFee"
                            id="depositFee"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex-row flex-end">
                        <button type="submit">Add Property</button>
                    </div>
                </form>
            </div>
                <img className="family-photo" src="/images/add-property-family.jpeg" alt="house-for-rent" />
        </div>
    );
}

export default AddProperty;
