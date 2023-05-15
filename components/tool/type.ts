export interface Tool {
  toolId: number;
  tool_name: string;
  manufacturer: string;
  model: string;
  barcode: string;
  photo: string;
  renderedDate?: Date;
}
