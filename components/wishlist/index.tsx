import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Badge from "@mui/material/Badge";
import Image from "next/image";
import { useAppSelector } from "@/redux/store/store";
import SampleBody from "@/utils/data";
import { useDispatch } from "react-redux";
import { setCart } from "@/redux/slice/cart";
import Close from "@/svgs/close";
import { Grid } from "@mui/material";
import { setWaitlist } from "@/redux/slice/waitlist";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "50%" },
  bgcolor: "background.paper",
  border: "none",
  p: 4,
  overflowX: "scroll",
};

const Wishlist = ({ state, action }: { state: boolean; action: any }) => {
  const dispatch = useDispatch();
  const wishlistItem = useAppSelector((store) => store.waitlist);

  const remove = (index: number) => {
    dispatch(
      setWaitlist(
        wishlistItem?.filter((items) => {
          return items !== wishlistItem[index];
        })
      )
    );
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={state}
      onClose={action}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}>
      <Fade in={state}>
        <Grid item xs={12}>
          <TableContainer component={Paper} sx={style}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell>Desc</TableCell>
                  <TableCell align="right">Unit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {wishlistItem?.map((row, index) => (
                  <TableRow key={row?.id}>
                    <TableCell>
                      <Box display={"flex"} sx={{ gap: "10px", alignItems: "center" }}>
                        <Badge badgeContent={<Close action={() => remove(index)} />}>
                          <Image src={row?.img} width={100} height={100} alt="Description" />
                        </Badge>
                        {row.title}
                      </Box>
                    </TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Fade>
    </Modal>
  );
};

export default Wishlist;
