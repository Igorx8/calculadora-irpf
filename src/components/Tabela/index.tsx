import { useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

interface ITableProps {
    tableHeaders: string[];
    tableFields: string[]
    tableData: Record<string, string | number>[];
    enableActions: boolean;
    route: string;
}


export const Tabela: React.FC<ITableProps> = (props) => {
    const navigate = useNavigate()
    const itemsPerPage = 7
    const totalItems = props.tableData.length
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const arrayPages = []
    const [tableDataFiltered, setTableDataFiltered] = useState<Record<string, string | number>[]>([])
    for(let i = 0; i < totalPages; i++){
        arrayPages.push(i)
    }
    
    const changePage = (selectedPage: number) => {
        if(selectedPage === 0) {
            setTableDataFiltered(props.tableData.slice(0, itemsPerPage))
        }
        setTableDataFiltered(props.tableData.slice(selectedPage * itemsPerPage, selectedPage * itemsPerPage + itemsPerPage))
    }

    // coloquei essa 'gambiarra' pois não consegui fazer renderizar os itens assim que a página carregava, tentei de várias formas
    setTimeout(() => {
        changePage(0)
    }, 500)
    
    const remove = (id: string | number) => {
        
    }
    
    return (
        <div className="flex justify-center items-center flex-col">
            <table className="table-auto text-xs">
                <thead>
                    <tr>
                        {props.tableHeaders.map((header, index) => {
                            return (<th key={index} className="bg-gray-100 border px-1 md:px-6 md:py-2">{header}</th>)
                        })}
                        {props.enableActions ? <th className="bg-gray-100 border px-1 md:px-6 md:py-2"> Ações </th> : ''}
                    </tr>
                </thead>
                <tbody>
                    {tableDataFiltered.map((data, index) => {
                        return (
                            <tr key={index}>
                                {props.tableFields.map((field, idx) => {
                                    return (
                                        <td key={idx} className="border md:px-6 md:py-2">{data[field]}</td>
                                    )
                                })}
                                {
                                    props.enableActions ? <td className="flex md:text-lg gap-4 border md:px-6 md:py-2">
                                        <button>
                                            <FaPen className="text-blue-400" onClick={() => navigate(props.route+'/'+data?.id)}/>
                                        </button>
                                        <button>
                                            <FaTrash className="text-red-400" onClick={() => remove(data.id)}/>
                                        </button>
                                    </td> : ''
                                }

                            </tr>

                        )
                    })}
                </tbody>
            </table>
            <footer>
                {arrayPages.map((page) => {
                    return <button className="h-8 w-8 mt-4 bg-gray-300 rounded mx-1" key={page} onClick={() => changePage(page)}> {page + 1} </button>
                })}
            </footer>
        </div>
    )
}