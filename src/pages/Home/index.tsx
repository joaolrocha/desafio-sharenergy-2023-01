import { Avatar, Paper, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { RandomUser } from "../../interface/RandomUser";

function Home() {
  const [userData, setUserData] = useState([] as RandomUser[]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const onClickHandler = () => {
    setLoading(true);
    axios.get(`https://randomuser.me/api/?results=25&page=${currentPage}`)
      .then((response) => {
        setUserData(response.data.results);
      }).catch((error) => {
        setLoading(true);
      }).finally(() => {
        setLoading(false);
      })
  }

  useEffect(onClickHandler, [currentPage]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableBody>
          {userData.map((user) => (
            <TableRow key={user.name.first}>
              <TableCell component="th" scope="row">
                <Avatar
                  alt={"avatar"}
                  src={user.picture.medium}
                />
              </TableCell>
              <TableCell align="right">{user.name.first} {user.name.last}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.dob.age}</TableCell>
              <TableCell align="right">{user.login.username}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={userData.length}
        rowsPerPage={10}
        page={currentPage}
        onPageChange={() => {
          setCurrentPage(currentPage + 1)
        }}
      />
    </TableContainer>
  )
}

export default Home