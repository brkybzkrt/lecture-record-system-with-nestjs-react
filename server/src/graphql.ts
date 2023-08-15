
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Student {
    firstName: string;
    lastName: string;
    displayName: string;
    email: string;
    code: string;
    isDeleted: boolean;
}

export interface IQuery {
    students(): Student[] | Promise<Student[]>;
}

type Nullable<T> = T | null;
