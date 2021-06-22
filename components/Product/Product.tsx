import { ProductProps } from "./Product.props";
import styles from "./Product.module.css";
import cn from "classnames";
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import React, { ForwardedRef, forwardRef, useRef, useState } from "react";
import { Button } from "../Button/Button";
import { declOfNum, priceRu } from "../../helpers/helpers";
import { Divider } from "../Divider/Divider";
import Image from "next/image";
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { motion } from "framer-motion";

export const Product = motion(
    forwardRef(
        (
            { product, className, ...props }: ProductProps,
            ref: ForwardedRef<HTMLDivElement>
        ): JSX.Element => {
            const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
            const reviewRef = useRef<HTMLDivElement>(null);

            const scrollToReview = () => {
                setIsReviewOpened(true);
                reviewRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            };

            return (
                <div className={className} {...props} ref={ref}>
                    <Card className={styles.product}>
                        <div className={styles.logo}>
                            <Image
                                src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                                alt={product.title}
                                width={70}
                                height={70}
                            />
                        </div>
                        <div className={styles.title}>{product.title}</div>
                        <div className={styles.price}>
                            {priceRu(product.price)}
                            {product.oldPrice && (
                                <Tag className={styles.oldPrice} color="green">
                                    {priceRu(product.price - product.oldPrice)}
                                </Tag>
                            )}
                        </div>
                        <div className={styles.credit}>
                            {priceRu(product.credit)}/<span className={styles.months}>мес</span>
                        </div>
                        <div className={styles.rating}>
                            <Rating rating={product.reviewAvg ?? product.initialRating} />
                        </div>
                        <div className={styles.tags}>
                            {product.categories.map((c) => (
                                <Tag key={c} color="ghost" className={styles.category}>
                                    {c}
                                </Tag>
                            ))}
                        </div>
                        <div className={styles.priceTitle}>цена</div>
                        <div className={styles.creditTitle}>кредит</div>
                        <div className={styles.ratingTitle}>
                            <a href="#ref" onClick={scrollToReview}>
                                {product.reviewCount}&nbsp;
                                {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
                            </a>
                        </div>
                        <Divider className={styles.hr}></Divider>
                        <div className={styles.description}>{product.description}</div>
                        <div className={styles.feature}>
                            {product.characteristics.map((c) => (
                                <div className={styles.characteristics} key={c.name}>
                                    <span className={styles.characteristicsName}>{c.name}</span>
                                    <span className={styles.characteristicsDots}></span>
                                    <span className={styles.characteristicsValue}>{c.value}</span>
                                </div>
                            ))}
                        </div>
                        <div className={styles.prosGroup}>
                            {product.advantages && (
                                <div className={styles.pros}>
                                    <div className={styles.prosTitle}>Преимущества</div>
                                    <div>{product.advantages}</div>
                                </div>
                            )}
                            {product.disadvantages && (
                                <div className={styles.cons}>
                                    <div className={styles.consTitle}>Недостатки</div>
                                    <div>{product.disadvantages}</div>
                                </div>
                            )}
                        </div>
                        <Divider className={cn(styles.hr, styles.hr2)}></Divider>
                        <div className={styles.actions}>
                            <Button appearence="primary">Узнать подробнее</Button>
                            <Button
                                appearence="ghost"
                                onClick={() => setIsReviewOpened(!isReviewOpened)}
                                arrow={isReviewOpened ? "down" : "right"}
                                className={styles.reviewBtn}
                            >
                                Читать отзывы
                            </Button>
                        </div>
                    </Card>
                    <Card
                        color="blue"
                        className={cn(styles.reviews, {
                            [styles.opened]: isReviewOpened,
                            [styles.closed]: !isReviewOpened,
                        })}
                        ref={reviewRef}
                    >
                        {product.reviews.map((r) => (
                            <React.Fragment key={r._id}>
                                <Review review={r} />
                                <Divider />
                            </React.Fragment>
                        ))}
                        <ReviewForm productId={product._id} />
                    </Card>
                </div>
            );
        }
    )
);
