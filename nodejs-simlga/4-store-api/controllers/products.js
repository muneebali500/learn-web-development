import Product from "../models/product.js";

export async function getAllProductsStatic(req, res) {
  const products = await Product.find({ price: { $gt: 30 } })
    .sort(`price`)
    .select(`name price`);

  res.status(200).json({ products, nbHits: products.length });
}

export async function getAllProducts(req, res) {
  const { featured, company, name, sort, fields, numericFilters } = req.query;
  const queryObj = {};

  if (featured) {
    queryObj.featured = featured;
  }

  if (company) {
    queryObj.company = company;
  }

  if (name) {
    queryObj.name = { $regex: name, $options: `i` };
  }

  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "<": "$lt",
      "<=": "$lte",
      "=": "$eq",
    };

    const regEx = /\b(<|>|>=|<=|=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );

    const options = [`price`, `rating`];
    filters = filters.split(`,`).forEach((item) => {
      const [field, operator, value] = item.split(`-`);
      if (options.includes(field)) {
        queryObj[field] = { [operator]: Number(value) };
      }
    });
  }

  // console.log(queryObj);

  let result = Product.find(queryObj);
  if (sort) {
    const sortList = sort.split(`,`).join(` `);
    result = result.sort(sortList);
  } else {
    result = result.sort(`createdAt`);
  }

  if (fields) {
    const fieldList = fields.split(`,`).join(` `);
    result = result.select(fieldList);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.limit(limit).skip(skip);

  const products = await result;

  res.status(200).json({ products, nbHits: products.length });
}
