type ILA26_internalData =
  | null
  | ({
      title: string;
      creator: {
        fullName: string;
        userId: string;
      };
      [key: string]: any;
    } & {
      type: ILA26_internalElementsTypes;
    });

type ILA26_internalElementsTypes = 'serviceOffer' | 'marketplaceProduct';

type ILA26_internalFeedProps = {
  ILA26_getInternalData: (
    typeOfRequest: ILA26_internalElementsTypes,
    elementId: string,
  ) => Promise<ILA26_internalData>;
};

export { ILA26_internalData, ILA26_internalElementsTypes, ILA26_internalFeedProps };
