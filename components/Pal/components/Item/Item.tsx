import styles from './Item.module.scss';
import {FC} from 'react';
import { palItemPropsTypes } from '../../types';
import Image from 'next/image';


const Item:FC<palItemPropsTypes> = ({
    image,
    name
}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <Image
                    src={image}
                    alt=""
                    width={280}
                    height={280}
                    />
            </div>
            <div className={styles.name}>
                {name}
            </div>
        </div>
    )
}

export default Item;