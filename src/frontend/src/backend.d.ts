import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    name: string;
    email: string;
    message: string;
    phone: string;
    kvaRequirement: bigint;
}
export interface backendInterface {
    getAllInquiries(): Promise<Array<Inquiry>>;
    getInquiryById(id: bigint): Promise<Inquiry>;
    submitInquiry(name: string, phone: string, email: string, message: string, kvaRequirement: bigint): Promise<bigint>;
}
