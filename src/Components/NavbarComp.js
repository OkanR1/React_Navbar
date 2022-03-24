import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav, Card } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Dashboard from './Dashboard';
import Petugas from './Petugas';
import Paket from './Paket';
import Transaksi from './Transaksi';
import Pelanggan from './Pelanggan';
import CetakLaporan from './CetakLaporan';
import CekLaundry from './CekLaundry';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="#">Laundry</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                                <Nav.Link as={Link} to="/paket">Paket</Nav.Link>
                                <Nav.Link as={Link} to="/petugas">Petugas</Nav.Link>
                                <Nav.Link as={Link} to="/pelanggan">Pelanggan</Nav.Link>
                                <Nav.Link as={Link} to="/transaksi">Transaksi</Nav.Link>
                                <Nav.Link as={Link} to="/cetaklaporan">Cetak Laporan</Nav.Link>
                                <Nav.Link as={Link} to="/ceklaundry">Cek Laundry</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route path="/paket">
                            <Paket />
                        </Route>
                        <Route path="/petugas">
                            <Petugas />
                        </Route>
                        <Route path="/transaksi">
                            <Transaksi />
                        </Route>
                        <Route path="/pelanggan">
                            <Pelanggan />
                        </Route>
                        <Route path="/cetaklaporan">
                            <CetakLaporan />
                        </Route>
                        <Route path="/ceklaundry">
                            <CekLaundry />
                        </Route>
                        <Route path="/">
                            <Dashboard />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
