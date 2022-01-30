const Table = () => {

    return (
        <div className="table w-myWidth7 border-2 border-black ">
            <p className='text-2xl uppercase underline font-semibold'>Table Customization</p>
            <input className="shadow-sm shadow-black my-2 focus:outline-none focus:border-2 border-black bg-gray-200/70 p-1 rounded-md" type="text" placeholder=" Enter the Rows" /><br />
            <input className="shadow-sm shadow-black my-2 focus:outline-none focus:border-2 border-black bg-gray-200/70 p-1 rounded-md" type="text" placeholder=" Enter the Columns" />

        </div>
    );
}

export default Table;