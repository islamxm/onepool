import BlockHead from "@/components/BlockHead/BlockHead";
import styles from './List.module.scss';
import Container from "@/components/Container/Container";
import Item from "../Item/Item";
import Badge from "@/components/Badge/Badge";
import Pag from "../Pag/Pag";
import {FC, useState, useEffect} from 'react';
import { IData, values } from "@/data/blogdata";
import * as _ from 'lodash';
import switchBlogTag from "@/helpers/switchBlogTag";
import data from "@/data/blogdata";


const tags: values[] = ['bath', 'comp','conc', 'iron', 'panel', 'spa']


const List:FC<{list?: IData[]}> = ({
    
}) => {
    const [activeTags, setActiveTags] = useState<values[]>([])
    const [page, setPage] = useState(0)
    const [list, setList] = useState<IData[]>(data)
    const [chunkedList, setChunkedList] = useState<IData[][]>([])


    useEffect(() => {
        setPage(0)
        if(activeTags?.length > 0) {
            
            const f = list
            const nl = f?.filter(blog => {
                if(activeTags.find(i => i === blog.value)) {
                    return blog
                }
            })
            setChunkedList(_.chunk(nl, 10))
        } else {
            setChunkedList(_.chunk(list, 10))
        }
    }, [activeTags, list])


    const selectTag = (tag: values) => {
        if(activeTags?.find(i => i === tag)) {
            const m = activeTags;
            const rm = m.splice(m.findIndex(i => i === tag), 1)
            setActiveTags([...m])
        } else {
            setActiveTags(s => [...s, tag])
        }
    }

  


    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <BlockHead title="Блог"/>
                    </div>
                        <div className={styles.kw}>
                            {
                                tags?.map((item, index) => (
                                    <div
                                        onClick={() => selectTag(item)} 
                                        key={index} 
                                        className={styles.kw_item}>
                                            <Badge 
                                            active={activeTags?.find(i => i === item) ? true : false}
                                            bgColor={switchBlogTag(item).bgColor} 
                                            label={switchBlogTag(item).label}/>
                                    </div>
                                ))
                            }
                        </div>
                    <div className={styles.body}>
                        {
                            chunkedList[page]?.map((item, index) => (
                                <div className={styles.item} key={item.id}>
                                    <Item  
                                        id={item.id}
                                        tag={item.value}
                                        title={item.title}
                                        descr={item.prevtext}
                                        />
                                </div>
                            ))
                        }
                        
                    </div>
                    {
                        chunkedList?.length > 1 ? (
                            <div className={styles.action}>
                                <Pag
                                    nextPage={() => setPage(s => s + 1)}
                                    prevPage={() => setPage(s => s - 1)}
                                    current={page + 1}
                                    total={chunkedList?.length}
                                    />
                            </div>  
                        ) : null
                    }
                    
                </div>
            </Container>
        </div>
    )
}

export default List;