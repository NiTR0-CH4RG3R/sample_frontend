import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import HttpCommon from "../../common/HttpCommon";
import SearchBar from "../../components/SearchBar/SearchBar";
import ListTable from "../../components/ListTable/ListTable";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import PageHeader from "../../components/PageHeader/PageHeader";
import Layout from "../../components/Layout/Layout";

import { AppRoutes } from "../../data/AppRoutes";

import * as MdIcons from "react-icons/md";

import "./ListUser.css";

export default function ListUser() {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    function fetchUsers() {
        HttpCommon.get("/users")
        .then((res) => {
            console.log(res.data);
            setUsers(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    function onSearch(e) {
        setSearch(e.target.value);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <Layout>
            <PageHeader title="List Users" />
            <SearchBar onSearch={onSearch} placeHolder="name" />
            <ListTable columns={["id", "name", "email", "phone"]} data={users} onRowClick={(row) => navigate(AppRoutes.systemUser.view.path.split(':')[0] + row.id) } />
            <div className="page-list-add-button">
                <FloatingButton  onClick={() => {navigate(AppRoutes.systemUser.add.path)}}>
                    <MdIcons.MdAdd />
                </FloatingButton>       
            </div>     
       </Layout>
    );
}