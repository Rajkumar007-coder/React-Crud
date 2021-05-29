import React, { useState } from 'react'

const Todo = () =>
{
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);
    const [toggle, setToggle] = useState(true);
    const [editItem, setEditItem] = useState(null);

    const addItems = () =>
    {
        if (!inputData)
        {
            alert("plz fill data")
        } else if (inputData && !toggle)
        {
            setItems(
                items.map((item) =>
                {
                    if (item.id === editItem)
                    {
                        return { ...item, name: inputData }
                    }
                    return item
                })
            )
            setToggle(true);
            setInputData("");
            setEditItem(null);

        } else
        {
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputData]);
            setInputData('');
        }

    }
    const Delete = (index) =>
    {
        const updatedItems = items.filter((item) =>
        {
            return index !== item.id;
        })
        setItems(updatedItems);
    }

    const Edit = (id) =>
    {
        let newEditItem = items.find((item) =>
        {
            return item.id === id;
        })
        setToggle(false);
        setInputData(newEditItem.name);
        setEditItem(id);
    }
    const RemoveAll = () =>
    {
        setItems([]);
    }




    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <div className="addItems">
                        <input type="text" placeholder="Add Items" value={inputData} onChange={(event) => { setInputData(event.target.value) }} />
                        {
                            toggle ? <i className="fa fa-plus add-btn" title="Add Item" onClick={addItems}></i> :
                                <i className="fas fa-edit add-btn" title="update Item" onClick={addItems}></i>
                        }
                    </div>
                    <div className="showItems">
                        {
                            items.map((item) =>
                            {
                                return (
                                    <div className="eachItem" key={item.id}>
                                        <h3>{item.name}</h3>
                                        <div className="todo-btn">
                                            <i className="fas fa-edit add-btn" title="edit Item" onClick={() => Edit(item.id)}></i>
                                            <i className="fas fa-trash-alt add-btn" title="Delete Item" onClick={() => Delete(item.id)}></i>
                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={RemoveAll}><span>CHECK LIST</span></button>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Todo;