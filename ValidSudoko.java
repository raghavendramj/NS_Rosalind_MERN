public class ValidSudoko {

    public boolean isValid(char board[][], int row, int col){
        char value = board[row][col];
        for(int i=0;i<board.length;++i){
            if((i != col) && board[row][i] == value){
                return false;
            }
        }

        for(int i=0;i<board.length;++i){
            if((i != row) && board[i][col] == value){
                return false;
            }
        }

        int rowIndex = 3 * (row/3);// row = 3//rowindex = 3
        int colIndex = 3 * (col/3);// col = 4//coindex = 3

        for(int i=rowIndex;i<rowIndex+3;++i){
            for(int j=colIndex;j<colIndex+3;++j){
                if((i != row) && (j != col) && board[i][j] == value){
                    return false;
                }
            }
        }
        return true;
    }

}
