import React from 'react';
import Table from 'react-bootstrap/Table'

const Posts = ({posts, loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr className="title">
                    <th>Breed</th>
                    <th>Coat</th>
                    <th>Country</th>
                    <th>Origin</th>
                    <th>Pattern</th>
                </tr>
            </thead>

            {posts.map(post => (
                <tbody key={post.id} className="">
                    <tr className="title-data">
                        <td>{post.breed}</td>
                        <td>{post.coat}</td>
                        <td>{post.country}</td>
                        <td>{post.origin}</td>
                        <td>{post.pattern}</td>
                    </tr>
                </tbody>
            ))}
        </Table>
    )
}

export default Posts;