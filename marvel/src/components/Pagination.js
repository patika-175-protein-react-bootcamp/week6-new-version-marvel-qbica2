import React from "react";
import style from "../styles/pagination.module.scss";

function Pagination() {
    return (
        <footer>
            <div className={style.pagination}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>...</button>
                <button>9</button>
                <button>10</button>
                <button></button>
            </div>
        </footer>
    );
}

export default Pagination;