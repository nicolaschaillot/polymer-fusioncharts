import MSCartesian from'../_internal/mscartesian';import ColumnDataset from'../../dataset/column';import ColumnMultiSeriesGroup from'../../dataset/groups/column-multiseries';class MSColumn2D extends MSCartesian{static getName(){return'MSColumn2D'}getName(){return'MSColumn2D'}constructor(){super(),this.eiMethods={}}__setDefaultConfig(){super.__setDefaultConfig(),this.config.friendlyName='Multi-series Column Chart',this.config.defaultDatasetType='column',this.config.enablemousetracking=!0}getDSdef(){return ColumnDataset}getDSGroupdef(){return ColumnMultiSeriesGroup}}export default MSColumn2D;