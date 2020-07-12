const random_pdt_units = [
  {
    code: 'punits001',
    category: '口袋',
    specification: '14x14x2',
  },
  {
    code: 'punits002',
    category: '绳子',
    specification: '20cm',
  },
  {
    code: 'punits003',
    category: '吊牌',
    specification: '9x9',
  },
];

// let random_pdt_units_call_count = 0;

export default {
  'get /product/product_unit': function fn(req, res) {
    const responseObj = random_pdt_units;
    // random_pdt_units_call_count += 1;
    setTimeout(() => {
      res.json(responseObj);
    }, 3000);
  },
};
