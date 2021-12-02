import { useState } from "react";
import PropTypes from "prop-types";

import { DialogContent, Link } from "@mui/material";
import { ReportAnswers } from "components";
import { DialogTitle } from "./fragments";
import * as Styles from "./DialogReportAnswers.styles";

export const DialogReportAnswers = ({ answers }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Link href="#" onClick={handleClickOpen} sx={{ mt: 4 }}>
        review last report
      </Link>

      <Styles.BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Last Report
        </DialogTitle>

        <DialogContent dividers>
          <ReportAnswers answers={answers} />
        </DialogContent>
      </Styles.BootstrapDialog>
    </>
  );
};

DialogReportAnswers.propTypes = {
  answers: PropTypes.array.isRequired,
};
