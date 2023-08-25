import styles from "./PageNotFound.module.css";
import FlatBlock from "../../../components/FlatBlock";
import Button from "../../../components/Button";

export default function PageNotFound() {
    document.title = "Không tìm thấy trang";

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <FlatBlock mix={true} center={true}>
                    <h1>Lỗi 404!</h1>
                    <p>Trang mà bạn tìm kiếm hiện không tồn tại</p>
                    <Button plusClass={styles.btn} to="/">Quay về trang chủ</Button>
                </FlatBlock>
            </div>
        </div>
    );
}