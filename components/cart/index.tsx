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
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useAppSelector } from "@/redux/store/store";
import SampleBody from "@/utils/data";
import { useDispatch } from "react-redux";
import { setCart } from "@/redux/slice/cart";
import { toast } from "react-toastify";
import Close from "@/svgs/close";
import { Grid } from "@mui/material";

const TAX_RATE = 0.07;
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

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

const Cart = ({ state, action }: { state: boolean; action: any }) => {
  const dispatch = useDispatch();
  const cartItem = useAppSelector((store) => store.cart);
  const subtotal = (items: SampleBody[]) => {
    return items?.reduce((a, b) => {
      return a + b.price * b.count;
    }, 0);
  };

  const addItem = (id: string) => {
    let newCart = cartItem?.map((e) => {
      if (id === e.id) {
        return {
          ...e,
          count: e.count + 1,
        };
      } else {
        return e;
      }
    });
    dispatch(setCart(newCart));
  };

  const minusItem = (id: string, count: number) => {
    if (count === 1) {
      toast.error("Minimum of 1 Product");
    } else {
      let newCart = cartItem?.map((e) => {
        if (id === e.id) {
          return {
            ...e,
            count: e.count - 1,
          };
        } else {
          return e;
        }
      });
      dispatch(setCart(newCart));
    }
  };

  const remove = (index: number) => {
    dispatch(
      setCart(
        cartItem?.filter((items) => {
          return items !== cartItem[index];
        })
      )
    );
  };

  const invoiceSubtotal = subtotal(cartItem);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;
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
                  <TableCell align="center" colSpan={3}>
                    Details
                  </TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Desc</TableCell>
                  <TableCell>Qty.</TableCell>
                  <TableCell align="right">Unit</TableCell>
                  <TableCell align="right">Sum</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItem?.map((row, index) => (
                  <TableRow key={row?.id}>
                    <TableCell>
                      <Box display={"flex"} sx={{ gap: "10px", alignItems: "center" }}>
                        <Badge badgeContent={<Close action={() => remove(index)} />}>
                          <Image src={row?.img} width={100} height={100} alt="Description" />
                        </Badge>
                        {row.title}
                      </Box>
                    </TableCell>
                    <TableCell align="right">
                      <Box display={"flex"} alignItems="center" sx={{ gap: "10px" }}>
                        <Typography component="span" onClick={() => minusItem(row.id, row.count)} variant="body1" sx={{ cursor: "pointer" }}>
                          -
                        </Typography>
                        {row.count}
                        <Typography component="span" onClick={() => addItem(row.id)} variant="body1" sx={{ cursor: "pointer" }}>
                          +
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{ccyFormat(row.price * row.count)}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell colSpan={2}>Subtotal</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tax</TableCell>
                  <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Fade>
    </Modal>
  );
};

export default Cart;
