import React from "react";

import {Card} from "antd";

const CreateCatCard = () => {
    const ctnt = "新建商品分类";

    return (
        <Card style={{width: 300}}>
            <p>{ctnt}</p>
        </Card>
    );
}