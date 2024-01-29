const mongoose = require('mongoose');

const marketSchema = new mongoose.Schema({
  marketId: String,
  productCurrencyId: String,
  productStatus: String,
  productStock: String,
  productStockUpdate: String,
  productCostPrice: String,
  productSuggestPrice: String,
  productMinimalAmount: String,
  productSalePrice: String,
  productIva: String,
  productDiscountPercentage: String,
  productDiscountDatefrom: String,
  productDiscountDateto: String,
  productDiscountStock: String,
});

const tagSchema = new mongoose.Schema({
  tagId: String,
});

const productSchema = new mongoose.Schema({
  forApproval: String,
  newProductStatus: String,
  productShortDesc: String,
  publicationStatusCheck: String,
  productLongDesc: String,
  productType: String,
  productDeliveryType: String,
  minGiftcardValue: String,
  maxGiftcardValue: String,
  couponPartial: String,
  couponUses: String,
  couponMinimum: String,
  giftcardValueStep: String,
  template: String,
  nominated: String,
  markets: marketSchema,
  productWeight: String,
  productWidth: String,
  productLength: String,
  productHeight: String,
  productGaugingGroupsId: String,
  lgtDelivery: String,
  lgtPickup: String,
  supplierId: String,
  productConditionId: String,
  tags: [tagSchema],
  productTextBtCaption: String,
  productText: String,
  productYoutubeId: String,
  images: [String], // Supongo que las imágenes son URLs, puedes ajustar esto según tus necesidades
});

const Product = mongoose.model('Products', productSchema);

module.exports = Product;
