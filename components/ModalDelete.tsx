import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

interface Props {
  show: boolean;
  close: Function;
  onClick?: Function;
}

const ModalDelete = (props: Props) => {
  return (
    <AlertDialog
      isOpen={props.show}
      // leastDestructiveRef={cancelRef}
      onClose={props.close}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Hapus Data
          </AlertDialogHeader>

          <AlertDialogBody>
            Apakah kamu yakin ingin menghapus data ini?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={props.close}>Kembali</Button>
            <Button
              colorScheme="red"
              ml={3}
              onClick={() => {
                props?.onClick();
                props.close();
              }}
            >
              Hapus
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default ModalDelete;
