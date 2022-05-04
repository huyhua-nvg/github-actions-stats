import {Link, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react"

type Props = {
    data: {
        branch: string
        user: string
        url: string
    }[]
}

export const DetailsTable = ({data}: Props) => {
    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>User</Th>
                        <Th>Branch</Th>
                        <Th>Link</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map(({user, url, branch}) => (
                        <Tr>
                            <Td>{user}</Td>
                            <Td>{branch}</Td>
                            <Td><Link href={url} isExternal>Action</Link></Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
