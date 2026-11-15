import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    acl_claim_create: {
                        table: 'sys_security_acl'
                        id: '8027cf39e7b04773a88965f9dda9b42e'
                    }
                    acl_claim_delete: {
                        table: 'sys_security_acl'
                        id: 'a9e51cc328754778a908f0971503f986'
                    }
                    acl_claim_read: {
                        table: 'sys_security_acl'
                        id: 'eb8613d1d46d4615ae9388288cebdfcb'
                    }
                    acl_claim_write: {
                        table: 'sys_security_acl'
                        id: '34557c400ae8436fa001b0be53897e0d'
                    }
                    acl_custody_log_create: {
                        table: 'sys_security_acl'
                        id: '79f733cf4037453b9f30685130d2f490'
                    }
                    acl_custody_log_delete: {
                        table: 'sys_security_acl'
                        id: '89289624046f43c794d05efaf81b12bb'
                    }
                    acl_custody_log_read: {
                        table: 'sys_security_acl'
                        id: '0594c2bbd3714f3a9fd1406a4804a238'
                    }
                    acl_custody_log_write: {
                        table: 'sys_security_acl'
                        id: '812635172a1a4c79b3f53f9a572c47d7'
                    }
                    acl_found_item_create: {
                        table: 'sys_security_acl'
                        id: 'c3852d58809e49cdbf49392b567acb06'
                    }
                    acl_found_item_delete: {
                        table: 'sys_security_acl'
                        id: 'd59c1ee1c7a344cc94663c281cbfea0f'
                    }
                    acl_found_item_read: {
                        table: 'sys_security_acl'
                        id: 'd374a438c2be4ff7827b7b760fce4f38'
                    }
                    acl_found_item_write: {
                        table: 'sys_security_acl'
                        id: 'af17440f07544820b2d44c830ec5de2f'
                    }
                    acl_location_create: {
                        table: 'sys_security_acl'
                        id: '375574bc15744a3dbe4c183b422775ce'
                    }
                    acl_location_delete: {
                        table: 'sys_security_acl'
                        id: '71f8d4acec68442aa13a019ca8dda0df'
                    }
                    acl_location_read: {
                        table: 'sys_security_acl'
                        id: 'c90a515d0c384992bbaeaebc9989451b'
                    }
                    acl_location_write: {
                        table: 'sys_security_acl'
                        id: 'f254d628ccb341f89312f4cbbafbe3cf'
                    }
                    acl_lost_item_create: {
                        table: 'sys_security_acl'
                        id: 'fdf0524c270840469ff177d50db47d7b'
                    }
                    acl_lost_item_delete: {
                        table: 'sys_security_acl'
                        id: '1f9d224144f34fdabf87722c9458b8c8'
                    }
                    acl_lost_item_read: {
                        table: 'sys_security_acl'
                        id: '0db97bf285c94b0a84b00ca0727f8023'
                    }
                    acl_lost_item_write: {
                        table: 'sys_security_acl'
                        id: '42e060c15dc7496d9397781e75e22668'
                    }
                    acl_match_create: {
                        table: 'sys_security_acl'
                        id: 'b2f1b3d112004b7b9f066eb0827026dd'
                    }
                    acl_match_delete: {
                        table: 'sys_security_acl'
                        id: '86430be6b7254934851e8ffba190d7b4'
                    }
                    acl_match_read: {
                        table: 'sys_security_acl'
                        id: '5fe3be8c4a6f45cd9a52013a535c0e65'
                    }
                    acl_match_write: {
                        table: 'sys_security_acl'
                        id: '44c23cd2743c4e85ad8b476f5f39a328'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '7eb2e020d95f4198b2c9459c17d63a64'
                    }
                    br_claim_state_change: {
                        table: 'sys_script'
                        id: 'd6ba06865756459788fd5c03152109e7'
                    }
                    br_match_accepted: {
                        table: 'sys_script'
                        id: 'c935041b224b404baf67b60b2aff67bd'
                    }
                    br_process_found_item: {
                        table: 'sys_script'
                        id: '7b6bc207e5e740fca7a73ba71f6f82d0'
                    }
                    br_score_lost_item: {
                        table: 'sys_script'
                        id: '09134f3eb48840eb9c247fd272c4ccec'
                    }
                    col_lost_found_main: {
                        table: 'sp_column'
                        id: '414ab781ff104e8a9c5814f0ccf55c9c'
                    }
                    container_lost_found_main: {
                        table: 'sp_container'
                        id: 'b705904c3d68454faeb7edcf726d88b2'
                    }
                    demo_found_accessory: {
                        table: 'x_1526023_lost_and_found_item'
                        id: '596d35719c1b457489f8550ed7fdb089'
                    }
                    demo_found_book: {
                        table: 'x_1526023_lost_and_found_item'
                        id: '7f9fbf9797784adc9ce300fe4aef85c2'
                    }
                    demo_found_id_card: {
                        table: 'x_1526023_lost_and_found_item'
                        id: 'f22202efbff84733a7db99c0153d3993'
                    }
                    demo_found_keys: {
                        table: 'x_1526023_lost_and_found_item'
                        id: '3c1eedf66c094012a58997d05e919aaa'
                    }
                    demo_found_laptop: {
                        table: 'x_1526023_lost_and_found_item'
                        id: 'd582c6747a9146e7b5d739a2d351a066'
                    }
                    demo_found_wallet: {
                        table: 'x_1526023_lost_and_found_item'
                        id: 'c21ec293ff6f453b9b8993cf6fb021c3'
                    }
                    demo_lost_bag: {
                        table: 'x_1526023_lost_and_lost_item'
                        id: '90206beebb46400faf5348d15829fe9b'
                    }
                    demo_lost_id_card: {
                        table: 'x_1526023_lost_and_lost_item'
                        id: 'f0c63db8d18f4852997bc85009a490a1'
                    }
                    demo_lost_keys: {
                        table: 'x_1526023_lost_and_lost_item'
                        id: '1ee4c6aba0ac4726b5e4b5940e7dc70d'
                    }
                    demo_lost_laptop: {
                        table: 'x_1526023_lost_and_lost_item'
                        id: '531d3ed60cf44a1d9ca2f7ab77d80949'
                    }
                    demo_lost_phone: {
                        table: 'x_1526023_lost_and_lost_item'
                        id: '61022daadefa47fd992879f0557a1a6a'
                    }
                    demo_lost_wallet: {
                        table: 'x_1526023_lost_and_lost_item'
                        id: 'f3ac20d3e25041bbad26656a13e427ee'
                    }
                    inst_lost_found_main: {
                        table: 'sp_instance'
                        id: '49ceb520bcb04df78a66e0c0116d39b5'
                    }
                    loc_admin_block: {
                        table: 'x_1526023_lost_and_location'
                        id: '4b6a548276c14c68b7715c82b9dc42a9'
                    }
                    loc_auditorium: {
                        table: 'x_1526023_lost_and_location'
                        id: '7cb999edcd3e4205aeeff09f4b067a5c'
                    }
                    loc_block_a: {
                        table: 'x_1526023_lost_and_location'
                        id: '52058e7f1bd04f39bcc7cb4bd4df6ca6'
                    }
                    loc_block_b_canteen: {
                        table: 'x_1526023_lost_and_location'
                        id: 'c75cb0ab93094a64a38d5c653a87d179'
                    }
                    loc_cafeteria: {
                        table: 'x_1526023_lost_and_location'
                        id: 'a2a0bb5f81994df8883a0a3e13ddcf61'
                    }
                    loc_computer_lab: {
                        table: 'x_1526023_lost_and_location'
                        id: '235448b0ba394b20ab23153ea5a4316c'
                    }
                    loc_hostel: {
                        table: 'x_1526023_lost_and_location'
                        id: '5a26370b13cb45c985923d8967896d52'
                    }
                    loc_library: {
                        table: 'x_1526023_lost_and_location'
                        id: 'beda4faeb63340be99e56875cfddb984'
                    }
                    loc_main_gate: {
                        table: 'x_1526023_lost_and_location'
                        id: 'bfbfbe0e911f4386b8f2a5741269b73d'
                    }
                    loc_parking: {
                        table: 'x_1526023_lost_and_location'
                        id: '86553abfe5304961979871d88dc0a9a5'
                    }
                    loc_sports_ground: {
                        table: 'x_1526023_lost_and_location'
                        id: '947d0106faa44d9a932d00b01e48fe50'
                    }
                    loc_workshop: {
                        table: 'x_1526023_lost_and_location'
                        id: 'a361ab6aaff24abe8400c149b1af006d'
                    }
                    lost_and_found_menu: {
                        table: 'sys_app_application'
                        id: '49203797110946d09fc8394e7ad8282d'
                    }
                    module_claims: {
                        table: 'sys_app_module'
                        id: '88755298f92447389243b8720f1e52df'
                    }
                    module_custody_log: {
                        table: 'sys_app_module'
                        id: 'ce3db610ae5e4d4d801008e7ce60b718'
                    }
                    module_found_items: {
                        table: 'sys_app_module'
                        id: '1cb5b339c4114ca295e711d64fdc28e6'
                    }
                    module_locations: {
                        table: 'sys_app_module'
                        id: '40a6575c91f34d528776b98dfbb53817'
                    }
                    module_lost_items: {
                        table: 'sys_app_module'
                        id: 'a7968aa26639491e83068f5573781cc3'
                    }
                    module_match_suggestions: {
                        table: 'sys_app_module'
                        id: 'dde7dfce82fe46b4aa528484009502d5'
                    }
                    module_portal: {
                        table: 'sys_app_module'
                        id: '2a0054483db1409e841b85c7a449ce08'
                    }
                    notif_high_match: {
                        table: 'sysevent_email_action'
                        id: 'c62d59f1939d40e284fac86e10c1fd43'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '642bc4b1ed7343fd8e1a52542a163d3c'
                    }
                    portal_lost_found: {
                        table: 'sp_portal'
                        id: 'a0b279e90e6141cf96179710679ea450'
                    }
                    row_lost_found_main: {
                        table: 'sp_row'
                        id: '55ea36128f8640c4a8ad05a97b52c838'
                    }
                    'src_server_business-rules_claim-state-change_ts': {
                        table: 'sys_module'
                        id: '1092e0fccc3a42d3a1972406b7332b8f'
                    }
                    'src_server_business-rules_match-accepted_ts': {
                        table: 'sys_module'
                        id: '2ff39d1fa02041b58d83d70a0ba540ea'
                    }
                    'src_server_business-rules_process-found-item_ts': {
                        table: 'sys_module'
                        id: 'e5a4dda77fa14536a56ebe6666ffa4ee'
                    }
                    'src_server_business-rules_score-lost-item_ts': {
                        table: 'sys_module'
                        id: '2179ea81d6044192add6f85a0bbc1172'
                    }
                    'src_server_business-rules_scoring-engine_ts': {
                        table: 'sys_module'
                        id: 'a1b0d6318fd246a1a9d0bd2b6170bfb5'
                    }
                    widget_lost_found_main: {
                        table: 'sp_widget'
                        id: 'ec5f4d9ecc27405e9c2da231cc02d0df'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '019087257039428691215b7b419d6850'
                        key: {
                            name: 'x_1526023_lost_and_location'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '01d360f93ab64a8baca20c1cdaee0b3b'
                        key: {
                            sys_ui_section: {
                                id: '58e456e40e3d4b80bfae83a2bce1fc8e'
                                key: {
                                    name: 'x_1526023_lost_and_claim'
                                    caption: 'Claim Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '022397bd14884b708b74001d60d6cf26'
                        key: {
                            name: 'x_1526023_lost_and_match'
                            element: 'lost_item'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '02556ed658b143ec9bfe802cf5dffd45'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'category'
                            value: 'id_card'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '02ce2fa3a0644321b325f46a6acb03f9'
                        key: {
                            sys_security_acl: 'eb8613d1d46d4615ae9388288cebdfcb'
                            sys_user_role: {
                                id: '99f3114296944914992c6ba51250f687'
                                key: {
                                    name: 'x_1526023_lost_and.lost_found_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '0722981e519c460e9f5575ebbc6e6741'
                        key: {
                            name: 'x_1526023_lost_and_match'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '078f7d6119024410a01908e9f50e10c6'
                        key: {
                            sys_ui_section: {
                                id: 'ce82872a8c8a4fbdb6256191996c968b'
                                key: {
                                    name: 'x_1526023_lost_and_custody_log'
                                    caption: 'Custody Log Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'timestamp'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0839ae34c6be41b1bbc6c90af36f55f2'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'category'
                            value: 'phone'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '08474a39aa104d3585d554d61ed6dedd'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '093265c5e5614654b6f5790f5e1d9be4'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'category'
                            value: 'wallet'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0ca2538c805142448b78cda31110371e'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'last_seen_location'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0f7832b9915a40b683c56753a5a55175'
                        key: {
                            name: 'x_1526023_lost_and_custody_log'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '109ef7ce31bb4a3d868f9f6b237f9f8b'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '10e7c0f4b876438ebd4917e4c18a01fc'
                        key: {
                            table: 'x_1526023_lost_and_claim'
                            short_description: 'Show and require Approver when Claim is Approved'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '116f9ae82b514db2afbf0245d3dd3a55'
                        key: {
                            name: 'x_1526023_lost_and_match'
                            element: 'band'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '11e4edf5c2234e8cb75df43078efe073'
                        key: {
                            sys_ui_section: {
                                id: '7af0156ee61b439f898696cc7129c1d4'
                                key: {
                                    name: 'x_1526023_lost_and_lost_item'
                                    caption: 'Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'brand'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '12a53df8dde9455e8d41366342599823'
                        key: {
                            name: 'x_1526023_lost_and_location'
                            element: 'building'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '153829e5a66943df88275f6edd219a56'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'colour'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '1551103e41684fb9ae97fc18fbbe5896'
                        key: {
                            name: 'x_1526023_lost_and_match'
                            caption: 'Match Details'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '160141cabb68479e975b4dc030cbb76a'
                        key: {
                            name: 'x_1526023_lost_and_location'
                            element: 'building'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '16af9d04e4d24e479dee35a3ef0f0880'
                        key: {
                            sys_ui_section: {
                                id: '1ee959e1035442cc9d4c4195141c0426'
                                key: {
                                    name: 'x_1526023_lost_and_found_item'
                                    caption: 'Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'colour'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '16dacc1b0a924ced91bd6c50ba6b803c'
                        key: {
                            name: 'x_1526023_lost_and_match'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '17081491b50944fda4e9bcd273ed1cd4'
                        key: {
                            sys_ui_section: {
                                id: '1ee959e1035442cc9d4c4195141c0426'
                                key: {
                                    name: 'x_1526023_lost_and_found_item'
                                    caption: 'Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '9'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '17d4af4cf46a40ac9af798de37b1ee73'
                        key: {
                            name: 'x_1526023_lost_and_claim'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1aa2165373b84704b06dc1b6f9fab5be'
                        key: {
                            sys_security_acl: 'a9e51cc328754778a908f0971503f986'
                            sys_user_role: {
                                id: '99f3114296944914992c6ba51250f687'
                                key: {
                                    name: 'x_1526023_lost_and.lost_found_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1b49a5fbe9234347b6dc93092bb5b337'
                        key: {
                            sys_ui_section: {
                                id: '58e456e40e3d4b80bfae83a2bce1fc8e'
                                key: {
                                    name: 'x_1526023_lost_and_claim'
                                    caption: 'Claim Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'lost_item'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1bc315ed6e574cef90a556066b76460c'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'state'
                            value: 'matched'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1c861e3d0c72486b910d47b79bf8862c'
                        key: {
                            name: 'x_1526023_lost_and_match'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1df700a8e50d4af48eb86a11fbe8f046'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'item_title'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '1ee959e1035442cc9d4c4195141c0426'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            caption: 'Item Details'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2026edeaeb4945e7a88a3f96ee79cdf3'
                        key: {
                            sys_security_acl: '34557c400ae8436fa001b0be53897e0d'
                            sys_user_role: {
                                id: '99f3114296944914992c6ba51250f687'
                                key: {
                                    name: 'x_1526023_lost_and.lost_found_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '23307beec04b457b81d5e473b6769e98'
                        key: {
                            category: 'x_1526023_lost_and_found_item'
                            prefix: 'FOUND'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '233f00d47ebc42b79595f637ed607768'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'item_title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '24158293bce8480dac8ca48568094a09'
                        key: {
                            name: 'x_1526023_lost_and_claim'
                            element: 'verification_state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '24354c0c3a16464280ae2e828849dcfb'
                        key: {
                            name: 'x_1526023_lost_and_custody_log'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '24ea0b89064c4413bd32dcf7e884d6de'
                        key: {
                            sys_ui_form: {
                                id: '7033a40547b24ad4b5fcc69a3d12158a'
                                key: {
                                    name: 'x_1526023_lost_and_lost_item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'c3f780170eea49c9a3e60112bdbfbe81'
                                key: {
                                    name: 'x_1526023_lost_and_lost_item'
                                    caption: 'Status'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '253d27807c544230978967d6100cf39e'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '28cc9ed3b69e42339f12315cc45b0e84'
                        key: {
                            name: 'x_1526023_lost_and_claim'
                            element: 'found_item'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '29b1ec4e09a54e0e83dc2c49dcddee4b'
                        key: {
                            name: 'x_1526023_lost_and_match'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2a3274fa29eb411397b44493c795cc05'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2b82c6d3f7d14d2da6bf745fae466514'
                        key: {
                            sys_ui_section: {
                                id: '848d5a9a75f643c2b7bf44be4d361311'
                                key: {
                                    name: 'x_1526023_lost_and_found_item'
                                    caption: 'Location and Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2c253a84c8f54fe6a9c4b1f2111b40c0'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'found_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2c4e4653d3444752930feba49e18f016'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'category'
                            value: 'accessory'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2ee11b85be274b58ade9d092c4b41130'
                        key: {
                            sys_ui_section: {
                                id: '1ee959e1035442cc9d4c4195141c0426'
                                key: {
                                    name: 'x_1526023_lost_and_found_item'
                                    caption: 'Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '317535d3b4e7449b944a1b6c13e2fedd'
                        key: {
                            sys_ui_section: {
                                id: 'ce82872a8c8a4fbdb6256191996c968b'
                                key: {
                                    name: 'x_1526023_lost_and_custody_log'
                                    caption: 'Custody Log Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'event'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '31fa00e58b474198b4e3bb38d7e90ecb'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '32c1040901894f34850fc58882c6c711'
                        key: {
                            sys_ui_section: {
                                id: '1ee959e1035442cc9d4c4195141c0426'
                                key: {
                                    name: 'x_1526023_lost_and_found_item'
                                    caption: 'Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3356d2e0e8b6486a993e3fa2f4965021'
                        key: {
                            sys_ui_section: {
                                id: '1551103e41684fb9ae97fc18fbbe5896'
                                key: {
                                    name: 'x_1526023_lost_and_match'
                                    caption: 'Match Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'lost_item'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '33f2c582fdd94276bb02daed4c6b80f9'
                        key: {
                            sys_ui_section: {
                                id: '1551103e41684fb9ae97fc18fbbe5896'
                                key: {
                                    name: 'x_1526023_lost_and_match'
                                    caption: 'Match Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'band'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '35229a1a114342e2997f0bce36643bc3'
                        key: {
                            sys_ui_section: {
                                id: 'ce82872a8c8a4fbdb6256191996c968b'
                                key: {
                                    name: 'x_1526023_lost_and_custody_log'
                                    caption: 'Custody Log Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'found_item'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3597ff411d1d42e3bf2498eabf0840cb'
                        key: {
                            name: 'x_1526023_lost_and_custody_log'
                            element: 'event'
                            value: 'received'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3667daa5451042d09aa954444b078844'
                        key: {
                            name: 'x_1526023_lost_and_claim'
                            element: 'approver'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '37c947a088d2415e8d4e106bfa823a7d'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'category'
                            value: 'other'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '38056fe6d84d4fc48929c24f69a7d4ef'
                        key: {
                            sys_security_acl: '5fe3be8c4a6f45cd9a52013a535c0e65'
                            sys_user_role: {
                                id: '99f3114296944914992c6ba51250f687'
                                key: {
                                    name: 'x_1526023_lost_and.lost_found_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '39545d0b34874d88a401324823f7dc21'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            caption: 'Status'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3a4d5d350d8747d0ab5b66a35d4a9153'
                        key: {
                            name: 'x_1526023_lost_and_custody_log'
                            element: 'handled_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3beb235388b54ed5ac5494b8f488a25d'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'logged_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3bf0a8e8f60e4871b9de1defac716464'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'state'
                            value: 'closed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '3c2e2ae8379f4900996cdeb77403ce2e'
                        key: {
                            name: 'x_1526023_lost_and_location'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3d6d726c55094dc08b03b74c0e613b19'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3d80b7ec9d904f2aa9ef6c3e7ee5992c'
                        key: {
                            sys_ui_section: {
                                id: 'ce82872a8c8a4fbdb6256191996c968b'
                                key: {
                                    name: 'x_1526023_lost_and_custody_log'
                                    caption: 'Custody Log Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '401aeba36e074dd2ad2e3dcdccc49c73'
                        key: {
                            name: 'x_1526023_lost_and_claim'
                            element: 'lost_item'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '402b9519ab364a2e86f59a680d588efc'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '403c48d5320b48c79e98f0afedee0b24'
                        key: {
                            name: 'x_1526023_lost_and_location'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '423a2b5c85b346609d88f191379f7fc6'
                        key: {
                            sys_ui_section: {
                                id: '7af0156ee61b439f898696cc7129c1d4'
                                key: {
                                    name: 'x_1526023_lost_and_lost_item'
                                    caption: 'Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'reporter'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4245e72fc9f7449cb17594fbcd5f2957'
                        key: {
                            name: 'x_1526023_lost_and_claim'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '426a0ecf1ffc4b0b958f71b2ff14f1f6'
                        key: {
                            name: 'x_1526023_lost_and_custody_log'
                            element: 'found_item'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '42726b053cf44c9aabf6975ce381dbf9'
                        key: {
                            sys_security_acl: '42e060c15dc7496d9397781e75e22668'
                            sys_user_role: {
                                id: '99f3114296944914992c6ba51250f687'
                                key: {
                                    name: 'x_1526023_lost_and.lost_found_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '42dfbcc0591a4dcca7f617f5a63d0337'
                        key: {
                            sys_ui_section: {
                                id: '1551103e41684fb9ae97fc18fbbe5896'
                                key: {
                                    name: 'x_1526023_lost_and_match'
                                    caption: 'Match Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '44353c449d20461381cf75cac0a00130'
                        key: {
                            name: 'x_1526023_lost_and_location'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4486d1ed34e341e8b132209413dbec28'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '44bae9bb1ddd4d09948cb45506212c95'
                        key: {
                            sys_ui_section: {
                                id: 'ce82872a8c8a4fbdb6256191996c968b'
                                key: {
                                    name: 'x_1526023_lost_and_custody_log'
                                    caption: 'Custody Log Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'handled_by'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '44ea096c1dbb4e788dfefa44a783ef8f'
                        key: {
                            sys_security_acl: '375574bc15744a3dbe4c183b422775ce'
                            sys_user_role: {
                                id: '99f3114296944914992c6ba51250f687'
                                key: {
                                    name: 'x_1526023_lost_and.lost_found_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '452307c3140c4ebd925be58f7c271c46'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '485512a6a4fa486db5588609b606d98a'
                        key: {
                            category: 'x_1526023_lost_and_claim'
                            prefix: 'CLM'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '48a9e6bf681a43dcb256bcb950a57895'
                        key: {
                            sys_ui_section: {
                                id: '5c7c704727364318b03127afc05ed4ff'
                                key: {
                                    name: 'x_1526023_lost_and_lost_item'
                                    caption: 'Location and Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '48b049c4494e4c18ba192ef4307b1675'
                        key: {
                            name: 'x_1526023_lost_and_claim'
                            element: 'verification_state'
                            value: 'submitted'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '49aeabf52a854d58a8794ed0286e4624'
                        key: {
                            sys_ui_form: {
                                id: '16dacc1b0a924ced91bd6c50ba6b803c'
                                key: {
                                    name: 'x_1526023_lost_and_match'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '1551103e41684fb9ae97fc18fbbe5896'
                                key: {
                                    name: 'x_1526023_lost_and_match'
                                    caption: 'Match Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4a87bb49fbe342da8f4bc0adc4fa35e9'
                        key: {
                            name: 'x_1526023_lost_and_custody_log'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4ab31971c93c46f8bbeae7f2f4059977'
                        key: {
                            sys_security_acl: '86430be6b7254934851e8ffba190d7b4'
                            sys_user_role: {
                                id: '99f3114296944914992c6ba51250f687'
                                key: {
                                    name: 'x_1526023_lost_and.lost_found_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4cf8453f3fe14c73806309eb1e164a43'
                        key: {
                            name: 'x_1526023_lost_and_custody_log'
                            element: 'event'
                            value: 'stored'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4cfcf0e009db4bb3bb04b86451a54186'
                        key: {
                            sys_ui_section: {
                                id: '5c7c704727364318b03127afc05ed4ff'
                                key: {
                                    name: 'x_1526023_lost_and_lost_item'
                                    caption: 'Location and Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4dd7ed1fd8604cceab3289cf15b40390'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'category'
                            value: 'bag'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5036226692964dd5aefb514f58d46789'
                        key: {
                            name: 'x_1526023_lost_and_custody_log'
                            element: 'timestamp'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '50d3724b2df148b3b9a5a4aab7c1af83'
                        key: {
                            sys_ui_section: {
                                id: '1551103e41684fb9ae97fc18fbbe5896'
                                key: {
                                    name: 'x_1526023_lost_and_match'
                                    caption: 'Match Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'found_item'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '51c7b3a54375451ca663584bb957bdd5'
                        key: {
                            sys_ui_form: {
                                id: 'fd63a21461184aee82dccea8c73de505'
                                key: {
                                    name: 'x_1526023_lost_and_location'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '8760adac5de5441cb853922af9c7f49d'
                                key: {
                                    name: 'x_1526023_lost_and_location'
                                    caption: 'Location Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '51fe0a52fa2f4b3e8d22bada80d2db8e'
                        key: {
                            name: 'x_1526023_lost_and_claim'
                            element: 'verification_state'
                            value: 'rejected'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '522c4f6011714090914dd1c5d3edbd1a'
                        key: {
                            name: 'x_1526023_lost_and_custody_log'
                            element: 'event'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '53025d5cd65841a2a4adf74cf8bd4b89'
                        key: {
                            name: 'x_1526023_lost_and_custody_log'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '530bcc28b3e04b58b39b5b2449a85241'
                        key: {
                            sys_ui_section: {
                                id: '1551103e41684fb9ae97fc18fbbe5896'
                                key: {
                                    name: 'x_1526023_lost_and_match'
                                    caption: 'Match Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '539050883d6341b0aded7fc3cc80d315'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'state'
                            value: 'handover_pending'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '540491c6a6b74591a418c98ec47b2e29'
                        key: {
                            sys_ui_section: {
                                id: '1551103e41684fb9ae97fc18fbbe5896'
                                key: {
                                    name: 'x_1526023_lost_and_match'
                                    caption: 'Match Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5421a9fb96004c4fba493e0e9be7c4a7'
                        key: {
                            name: 'x_1526023_lost_and_match'
                            element: 'score_breakdown'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '54c44bffc2e74e1782d1023e2ceaddab'
                        key: {
                            sys_ui_section: {
                                id: '848d5a9a75f643c2b7bf44be4d361311'
                                key: {
                                    name: 'x_1526023_lost_and_found_item'
                                    caption: 'Location and Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'found_location'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5603cac03e0145ac9f5ee8efd5b61c61'
                        key: {
                            sys_ui_section: {
                                id: 'ce82872a8c8a4fbdb6256191996c968b'
                                key: {
                                    name: 'x_1526023_lost_and_custody_log'
                                    caption: 'Custody Log Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '56cc9cd6a7cc49a5827f323bbad9748a'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'item_title'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '577f2d4b55fb4c07ba928442c4e785ea'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '57b680407f0d4c9ba23a743c7e6595d4'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '57f7af4b61714d6e9359ec6a06ad9a1b'
                        key: {
                            name: 'x_1526023_lost_and_claim'
                            element: 'lost_item'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '58e456e40e3d4b80bfae83a2bce1fc8e'
                        key: {
                            name: 'x_1526023_lost_and_claim'
                            caption: 'Claim Details'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '58e91be157054b969393d1e4f4448f4a'
                        key: {
                            sys_ui_section: {
                                id: '58e456e40e3d4b80bfae83a2bce1fc8e'
                                key: {
                                    name: 'x_1526023_lost_and_claim'
                                    caption: 'Claim Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '59682ddae13348eeb82eabd0ed73ccf0'
                        key: {
                            name: 'x_1526023_lost_and_claim'
                            element: 'approver'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5ac5c8c94aa14ffda3f5f3b4cc4b8d46'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '5c7c704727364318b03127afc05ed4ff'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            caption: 'Location and Time'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5e02845858f94e8898c3f40fe4330a1c'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'category'
                            value: 'other'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5f83d4ef369649ffb3291b3553a36a95'
                        key: {
                            sys_ui_section: {
                                id: '58e456e40e3d4b80bfae83a2bce1fc8e'
                                key: {
                                    name: 'x_1526023_lost_and_claim'
                                    caption: 'Claim Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5f8c9ad339fb45b39838a10f06f8705f'
                        key: {
                            sys_ui_section: {
                                id: '1551103e41684fb9ae97fc18fbbe5896'
                                key: {
                                    name: 'x_1526023_lost_and_match'
                                    caption: 'Match Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'confidence_score'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '613d2ad6b3fe4d8287952ca65b1c8be6'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '61bb697aa3b0477e815224a38e8783fb'
                        key: {
                            sys_ui_section: {
                                id: '8760adac5de5441cb853922af9c7f49d'
                                key: {
                                    name: 'x_1526023_lost_and_location'
                                    caption: 'Location Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'campus_zone'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '62a66fa23faa40ea889fce6ba4278a58'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'state'
                            value: 'open'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '630eb3c1b8c747f881d00236f6a23d63'
                        key: {
                            sys_ui_section: {
                                id: '1ee959e1035442cc9d4c4195141c0426'
                                key: {
                                    name: 'x_1526023_lost_and_found_item'
                                    caption: 'Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'logged_by'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '65b9336508a5418c89074dfb082317ae'
                        key: {
                            sys_ui_section: {
                                id: '5c7c704727364318b03127afc05ed4ff'
                                key: {
                                    name: 'x_1526023_lost_and_lost_item'
                                    caption: 'Location and Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '674b8fd0e42f44a59aabd4ba6dd6606a'
                        key: {
                            name: 'x_1526023_lost_and_custody_log'
                            element: 'event'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '67efb1667de84848a97129f741b172d0'
                        key: {
                            name: 'x_1526023_lost_and_claim'
                            element: 'proof_of_ownership'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '69229e5b9efe4601965d98a2f85484f7'
                        key: {
                            sys_security_acl: '89289624046f43c794d05efaf81b12bb'
                            sys_user_role: {
                                id: '99f3114296944914992c6ba51250f687'
                                key: {
                                    name: 'x_1526023_lost_and.lost_found_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6ad710a253c84f7f845f74f02c1395b3'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'logged_by'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6b436305b2d4436787f1a090892e65bb'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'category'
                            value: 'wallet'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6b8bbebf1d2a413397803f3ace60d2b8'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6b8fa1f5335743b7b12046c6d917e358'
                        key: {
                            name: 'x_1526023_lost_and_claim'
                            element: 'found_item'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6bea735abaaa4b1ba22fe905741f2e96'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'category'
                            value: 'id_card'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6c44ed7efd6e4ad09a82927b8c6305bb'
                        key: {
                            sys_ui_section: {
                                id: '5c7c704727364318b03127afc05ed4ff'
                                key: {
                                    name: 'x_1526023_lost_and_lost_item'
                                    caption: 'Location and Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'last_seen_date'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6d1bac7be3a04c50a33b8b15ef890f3d'
                        key: {
                            name: 'x_1526023_lost_and_match'
                            element: 'band'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6dc14c86182d4322b87d95249873f3dd'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'found_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '6fdd80352f56422fb19d90220d174ae4'
                        key: {
                            sys_ui_form: {
                                id: '402b9519ab364a2e86f59a680d588efc'
                                key: {
                                    name: 'x_1526023_lost_and_found_item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '1ee959e1035442cc9d4c4195141c0426'
                                key: {
                                    name: 'x_1526023_lost_and_found_item'
                                    caption: 'Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '7033a40547b24ad4b5fcc69a3d12158a'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '711bc5175917419f995ac99978e1ea0a'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'colour'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '7152fbaffd5446008c501b4f17d2e16c'
                        key: {
                            name: 'x_1526023_lost_and_claim'
                            element: 'verification_state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '72fca47a1cc04f5896de43172c64c6a1'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'found_location'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '73f9ba63868940489677403929536bed'
                        key: {
                            ui_policy: {
                                id: '10e7c0f4b876438ebd4917e4c18a01fc'
                                key: {
                                    table: 'x_1526023_lost_and_claim'
                                    short_description: 'Show and require Approver when Claim is Approved'
                                }
                            }
                            field: 'approver'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7507ece0089e4099b5a2b5dd7fb60eb0'
                        key: {
                            name: 'x_1526023_lost_and_location'
                            element: 'campus_zone'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '75198e81c23e41b5a9aa7b9266c9e184'
                        key: {
                            name: 'x_1526023_lost_and_custody_log'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '763c0623bdaf4f54b352ce8f312f24a5'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'reporter'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '7a5778c958b045a3a86275652d4ee9f3'
                        key: {
                            sys_ui_form: {
                                id: '7d012a9928414248a722da86e718a630'
                                key: {
                                    name: 'x_1526023_lost_and_claim'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '58e456e40e3d4b80bfae83a2bce1fc8e'
                                key: {
                                    name: 'x_1526023_lost_and_claim'
                                    caption: 'Claim Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '7af0156ee61b439f898696cc7129c1d4'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            caption: 'Item Details'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7c4ce8790b1c461181f4a4a3072705be'
                        key: {
                            name: 'x_1526023_lost_and_custody_log'
                            element: 'event'
                            value: 'released'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '7d012a9928414248a722da86e718a630'
                        key: {
                            name: 'x_1526023_lost_and_claim'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7d193823e0b64d9a9861e2dc50f9f8c5'
                        key: {
                            sys_ui_section: {
                                id: '1ee959e1035442cc9d4c4195141c0426'
                                key: {
                                    name: 'x_1526023_lost_and_found_item'
                                    caption: 'Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7d7d6af267484aa7ab3dca42b69f9f6e'
                        key: {
                            name: 'x_1526023_lost_and_match'
                            element: 'band'
                            value: 'low'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7de91e0b2fea4cf7870cb78897c364ea'
                        key: {
                            sys_security_acl: 'f254d628ccb341f89312f4cbbafbe3cf'
                            sys_user_role: {
                                id: '99f3114296944914992c6ba51250f687'
                                key: {
                                    name: 'x_1526023_lost_and.lost_found_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '7f96710c804949e2bbddc041db1c5d8f'
                        key: {
                            name: 'x_1526023_lost_and_location'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7f9690e8d13c4c50991bd49374bd5fbd'
                        key: {
                            sys_ui_section: {
                                id: 'c3f780170eea49c9a3e60112bdbfbe81'
                                key: {
                                    name: 'x_1526023_lost_and_lost_item'
                                    caption: 'Status'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7fcd66fe923240f3b89963536c122f35'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '82ea6a43848249dfb3667fdd0e311923'
                        key: {
                            sys_ui_section: {
                                id: 'ce82872a8c8a4fbdb6256191996c968b'
                                key: {
                                    name: 'x_1526023_lost_and_custody_log'
                                    caption: 'Custody Log Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8309c176f3d3455a9d51914953def256'
                        key: {
                            sys_ui_section: {
                                id: '5c7c704727364318b03127afc05ed4ff'
                                key: {
                                    name: 'x_1526023_lost_and_lost_item'
                                    caption: 'Location and Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'last_seen_location'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '835170067ff9488bac663a456efb03e2'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '848d5a9a75f643c2b7bf44be4d361311'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            caption: 'Location and Time'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '852d669041da48478b89100ac7911053'
                        key: {
                            sys_ui_section: {
                                id: '58e456e40e3d4b80bfae83a2bce1fc8e'
                                key: {
                                    name: 'x_1526023_lost_and_claim'
                                    caption: 'Claim Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'approver'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '8760adac5de5441cb853922af9c7f49d'
                        key: {
                            name: 'x_1526023_lost_and_location'
                            caption: 'Location Details'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8832024ae9a345fbbc17116cb00497a8'
                        key: {
                            sys_ui_section: {
                                id: '7af0156ee61b439f898696cc7129c1d4'
                                key: {
                                    name: 'x_1526023_lost_and_lost_item'
                                    caption: 'Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '89f12d5572c44909a909fa4a20e3747e'
                        key: {
                            sys_ui_section: {
                                id: '1ee959e1035442cc9d4c4195141c0426'
                                key: {
                                    name: 'x_1526023_lost_and_found_item'
                                    caption: 'Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'category'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8a3990532ed149bfbbb4a9506457bb8f'
                        key: {
                            sys_ui_section: {
                                id: '7af0156ee61b439f898696cc7129c1d4'
                                key: {
                                    name: 'x_1526023_lost_and_lost_item'
                                    caption: 'Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'category'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8bff1a5bc4bc466896332c610e482692'
                        key: {
                            name: 'x_1526023_lost_and_match'
                            element: 'confidence_score'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8c2e12fbeba44ec792110b78bd80d3a4'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'item_title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8c333b4c8d63468d9b4f1317862ead64'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'state'
                            value: 'stored'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '912b3c3f25ee40ebb89c4d8045f351c6'
                        key: {
                            name: 'x_1526023_lost_and_claim'
                            element: 'proof_of_ownership'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '92b4df1a8035498faa0db85f2f4380fa'
                        key: {
                            id: 'x_1526023_lost_and_portal_home'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '939032efb369422697e53dcb5dbd7faa'
                        key: {
                            sys_ui_section: {
                                id: '8760adac5de5441cb853922af9c7f49d'
                                key: {
                                    name: 'x_1526023_lost_and_location'
                                    caption: 'Location Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9646e3de70b0498b83857b41d0d6208f'
                        key: {
                            name: 'x_1526023_lost_and_match'
                            element: 'lost_item'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '96946ef75916444da030e08ea2dff5ff'
                        key: {
                            sys_ui_section: {
                                id: '848d5a9a75f643c2b7bf44be4d361311'
                                key: {
                                    name: 'x_1526023_lost_and_found_item'
                                    caption: 'Location and Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '97ac14eb602245d589b2d51e1e63f6e7'
                        key: {
                            sys_ui_section: {
                                id: '7af0156ee61b439f898696cc7129c1d4'
                                key: {
                                    name: 'x_1526023_lost_and_lost_item'
                                    caption: 'Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '97fbda3209b14ed9ae5a91218bab98ec'
                        key: {
                            table: 'x_1526023_lost_and_found_item'
                            short_description: 'Make Storage location read-only when Found Item is Returned'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '981b7e043e474d7dbbbb80d7eb137e7b'
                        key: {
                            sys_ui_section: {
                                id: '58e456e40e3d4b80bfae83a2bce1fc8e'
                                key: {
                                    name: 'x_1526023_lost_and_claim'
                                    caption: 'Claim Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'claimant'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '98b4267c70594ee2981d0dad022238bd'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'category'
                            value: 'laptop'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '990810a4ea6546238103d93a6e754652'
                        key: {
                            sys_ui_section: {
                                id: '7af0156ee61b439f898696cc7129c1d4'
                                key: {
                                    name: 'x_1526023_lost_and_lost_item'
                                    caption: 'Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '99f3114296944914992c6ba51250f687'
                        key: {
                            name: 'x_1526023_lost_and.lost_found_admin'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '9f00d8288cd645139eab1c1ab3404818'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a09c2e3ae6b64c318ddb6d1b8f7009e6'
                        key: {
                            name: 'x_1526023_lost_and_claim'
                            element: 'claimant'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a1d208821c194ca6b60674aa5c4a355f'
                        key: {
                            sys_security_acl: 'b2f1b3d112004b7b9f066eb0827026dd'
                            sys_user_role: {
                                id: '99f3114296944914992c6ba51250f687'
                                key: {
                                    name: 'x_1526023_lost_and.lost_found_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a22c81bd81a2459691fa13ff618f77a5'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'state'
                            value: 'closed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a5fd59ef037043948beb8889b8aff67e'
                        key: {
                            name: 'x_1526023_lost_and_custody_log'
                            element: 'found_item'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a6cf2c59197c4b12ae4cc19ed025161f'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'state'
                            value: 'returned'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a8346f055ed041238fff5277affb9d13'
                        key: {
                            name: 'x_1526023_lost_and_claim'
                            element: 'claimant'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a95957d91e9d45d681bcc260ac2b6a27'
                        key: {
                            name: 'x_1526023_lost_and_location'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a99e115fedf34f1887b8871b7299aa39'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'category'
                            value: 'keys'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aa682558e53744b791a1096592e1fd93'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'storage_location'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'aa6abe9e0a35423f866a27bbf50d000e'
                        key: {
                            sys_ui_section: {
                                id: '7af0156ee61b439f898696cc7129c1d4'
                                key: {
                                    name: 'x_1526023_lost_and_lost_item'
                                    caption: 'Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'aa94c8abbf934e6ca8b49950dd4162d7'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'category'
                            value: 'phone'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa99737d51d046fb82c4e02cda743f44'
                        key: {
                            name: 'x_1526023_lost_and_custody_log'
                            element: 'event'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ab406ccfc6d3462ba1d97d7b158b9446'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'brand'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ab6ae278cde7467489b64bf227f57802'
                        key: {
                            sys_security_acl: '0594c2bbd3714f3a9fd1406a4804a238'
                            sys_user_role: {
                                id: '99f3114296944914992c6ba51250f687'
                                key: {
                                    name: 'x_1526023_lost_and.lost_found_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ac774ee8c0e44ee983016601ef88e0d1'
                        key: {
                            name: 'x_1526023_lost_and_claim'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'adf06ef3c8b84de88179dc8368c991f1'
                        key: {
                            sys_ui_section: {
                                id: '1ee959e1035442cc9d4c4195141c0426'
                                key: {
                                    name: 'x_1526023_lost_and_found_item'
                                    caption: 'Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'brand'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ae6e5d9fc2554daa8203a8eba9bc7643'
                        key: {
                            sys_ui_section: {
                                id: '848d5a9a75f643c2b7bf44be4d361311'
                                key: {
                                    name: 'x_1526023_lost_and_found_item'
                                    caption: 'Location and Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ae7151a03658477db9db1300bac75c77'
                        key: {
                            sys_ui_section: {
                                id: '58e456e40e3d4b80bfae83a2bce1fc8e'
                                key: {
                                    name: 'x_1526023_lost_and_claim'
                                    caption: 'Claim Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'found_item'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'af9635112db648cb9594cadb56e921e2'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'state'
                            value: 'matched'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'afdf80686a4c4bdca92079cb40743890'
                        key: {
                            name: 'x_1526023_lost_and_custody_log'
                            element: 'handled_by'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b0de6def3a654e0bad967c06015e282a'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'last_seen_location'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b1e06dd37f35465cbca4ea4b4d8d6ce0'
                        key: {
                            name: 'x_1526023_lost_and_match'
                            element: 'status'
                            value: 'suggested'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'b2a7b1c678ad4afba6e5298a290c2b45'
                        key: {
                            sys_ui_form: {
                                id: '402b9519ab364a2e86f59a680d588efc'
                                key: {
                                    name: 'x_1526023_lost_and_found_item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '39545d0b34874d88a401324823f7dc21'
                                key: {
                                    name: 'x_1526023_lost_and_found_item'
                                    caption: 'Status'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b35e462d1a984bc9b0802e9cd921b978'
                        key: {
                            sys_ui_section: {
                                id: '1551103e41684fb9ae97fc18fbbe5896'
                                key: {
                                    name: 'x_1526023_lost_and_match'
                                    caption: 'Match Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'score_breakdown'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b5c51c6cec2d4d47bc80a5975333b929'
                        key: {
                            sys_security_acl: '0db97bf285c94b0a84b00ca0727f8023'
                            sys_user_role: {
                                id: '99f3114296944914992c6ba51250f687'
                                key: {
                                    name: 'x_1526023_lost_and.lost_found_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b753e937679145a68403005c75ddec34'
                        key: {
                            name: 'x_1526023_lost_and_claim'
                            element: 'verification_state'
                            value: 'approved'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b7fba07bdbff4f538ec4f88848456f5a'
                        key: {
                            sys_ui_section: {
                                id: '1ee959e1035442cc9d4c4195141c0426'
                                key: {
                                    name: 'x_1526023_lost_and_found_item'
                                    caption: 'Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'item_title'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b82a0818b2bb4b79b955a0a4e43c1083'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'brand'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b8ad9e7c403d42208a241f7362a2e88c'
                        key: {
                            name: 'x_1526023_lost_and_match'
                            element: 'found_item'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'b9d13927dd524bf0ad8cc0787f92ea19'
                        key: {
                            sys_ui_form: {
                                id: '75198e81c23e41b5a9aa7b9266c9e184'
                                key: {
                                    name: 'x_1526023_lost_and_custody_log'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'ce82872a8c8a4fbdb6256191996c968b'
                                key: {
                                    name: 'x_1526023_lost_and_custody_log'
                                    caption: 'Custody Log Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ba7d1beba3244f39a92c0509e41e008c'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'last_seen_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bc0744fd3e83462e95b4385c8f81e884'
                        key: {
                            name: 'x_1526023_lost_and_claim'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bc15a74ac6bb4b8dae43ed4f20b002be'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'storage_location'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bc7d331b9655456d815a2357799a3689'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'category'
                            value: 'laptop'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'bd08cc2166c74ac7bfb098bc34fd4fed'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'bd3a4beb20194f088f35a3d8d775cae6'
                        key: {
                            name: 'x_1526023_lost_and_match'
                            element: 'band'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'bdb4d37fef974326a07771ce73f69c1e'
                        key: {
                            sys_ui_form: {
                                id: '7033a40547b24ad4b5fcc69a3d12158a'
                                key: {
                                    name: 'x_1526023_lost_and_lost_item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '7af0156ee61b439f898696cc7129c1d4'
                                key: {
                                    name: 'x_1526023_lost_and_lost_item'
                                    caption: 'Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'bf13fab616624bad9d09e3a64dd721f1'
                        key: {
                            sys_ui_form: {
                                id: '7033a40547b24ad4b5fcc69a3d12158a'
                                key: {
                                    name: 'x_1526023_lost_and_lost_item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '5c7c704727364318b03127afc05ed4ff'
                                key: {
                                    name: 'x_1526023_lost_and_lost_item'
                                    caption: 'Location and Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bf4b4bcdd96a48e58a963b733812fc0b'
                        key: {
                            sys_security_acl: '71f8d4acec68442aa13a019ca8dda0df'
                            sys_user_role: {
                                id: '99f3114296944914992c6ba51250f687'
                                key: {
                                    name: 'x_1526023_lost_and.lost_found_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c0218bb7dd76472ba0823ca8a4062d48'
                        key: {
                            name: 'x_1526023_lost_and_match'
                            element: 'band'
                            value: 'medium'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c1e9a5475a8544a2a5b0ea7ab947dae8'
                        key: {
                            sys_ui_section: {
                                id: '1551103e41684fb9ae97fc18fbbe5896'
                                key: {
                                    name: 'x_1526023_lost_and_match'
                                    caption: 'Match Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'status'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'c3f780170eea49c9a3e60112bdbfbe81'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            caption: 'Status'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c4b22627b65e43e4abcee49413341d2a'
                        key: {
                            name: 'x_1526023_lost_and_match'
                            element: 'confidence_score'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c53f6eb85e84498da915925a05d18a2a'
                        key: {
                            name: 'x_1526023_lost_and_claim'
                            element: 'verification_state'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'c54db8f6b50d47be9a6739d47d5fe188'
                        key: {
                            ui_policy: {
                                id: '97fbda3209b14ed9ae5a91218bab98ec'
                                key: {
                                    table: 'x_1526023_lost_and_found_item'
                                    short_description: 'Make Storage location read-only when Found Item is Returned'
                                }
                            }
                            field: 'storage_location'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'c5641976d539420582c3322b399356ce'
                        key: {
                            name: 'x_1526023_lost_and_match'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c57a83a75fc84613be5535ca88f11fb0'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c5d75fcf38b24f2295dfa825a7c636d9'
                        key: {
                            sys_security_acl: '79f733cf4037453b9f30685130d2f490'
                            sys_user_role: {
                                id: '99f3114296944914992c6ba51250f687'
                                key: {
                                    name: 'x_1526023_lost_and.lost_found_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c715aedf98204383916922efa3651a3a'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'colour'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c75a4dbb54da415d8a37eb944ce4cbae'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c8180670662045578f658a06f0c5f006'
                        key: {
                            sys_ui_section: {
                                id: '8760adac5de5441cb853922af9c7f49d'
                                key: {
                                    name: 'x_1526023_lost_and_location'
                                    caption: 'Location Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'building'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c8973ad25b1b435a882b97d3a9a3cd68'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'reporter'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cac3f3263c0140a78fe36a1ae73d7953'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cb1731fd48164ecbb040df90451aa31b'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'category'
                            value: 'book'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cbddce36765c438483af5458019c8236'
                        key: {
                            name: 'x_1526023_lost_and_custody_log'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cd6c5c928ccc4614aa3faf816f1fa787'
                        key: {
                            sys_ui_section: {
                                id: '848d5a9a75f643c2b7bf44be4d361311'
                                key: {
                                    name: 'x_1526023_lost_and_found_item'
                                    caption: 'Location and Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'found_date'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'ce82872a8c8a4fbdb6256191996c968b'
                        key: {
                            name: 'x_1526023_lost_and_custody_log'
                            caption: 'Custody Log Details'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'cecc4a3d885349c4a5029ff861d22069'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ceebdef4e4174c17b59a1312acf65bc8'
                        key: {
                            name: 'x_1526023_lost_and_custody_log'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'cf2ac5a3dbae4bf2a4ef67e15fad9895'
                        key: {
                            category: 'x_1526023_lost_and_lost_item'
                            prefix: 'LOST'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'cf54c521a8b74066bceb1bf0f5b13bb1'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cf8953123df34fcea04651f1f748ff39'
                        key: {
                            sys_ui_section: {
                                id: '58e456e40e3d4b80bfae83a2bce1fc8e'
                                key: {
                                    name: 'x_1526023_lost_and_claim'
                                    caption: 'Claim Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'proof_of_ownership'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cf9b6de8224c479cbc68f460d4a6932f'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'category'
                            value: 'accessory'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd171d01c6ed34b08a83916e70ff83308'
                        key: {
                            sys_ui_section: {
                                id: '58e456e40e3d4b80bfae83a2bce1fc8e'
                                key: {
                                    name: 'x_1526023_lost_and_claim'
                                    caption: 'Claim Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd1ea0c20b5284b66adf8885c32e1f1cd'
                        key: {
                            name: 'x_1526023_lost_and_match'
                            element: 'found_item'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd218c90c76dd4c768e9f392103665db6'
                        key: {
                            sys_ui_section: {
                                id: '39545d0b34874d88a401324823f7dc21'
                                key: {
                                    name: 'x_1526023_lost_and_found_item'
                                    caption: 'Status'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd3019cc897924c7d98e99c572b155e24'
                        key: {
                            sys_ui_section: {
                                id: '848d5a9a75f643c2b7bf44be4d361311'
                                key: {
                                    name: 'x_1526023_lost_and_found_item'
                                    caption: 'Location and Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'storage_location'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd3d0f8b9f61f40628478917a29c66639'
                        key: {
                            name: 'x_1526023_lost_and_match'
                            element: 'status'
                            value: 'accepted'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd438b4943c14492a9e4c6dcea310ed3b'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd4aadc5daff04ab0a56f32cf16dc948e'
                        key: {
                            name: 'x_1526023_lost_and_match'
                            element: 'status'
                            value: 'rejected'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd532db9d356f4f1da577803ca9cd954c'
                        key: {
                            sys_security_acl: '44c23cd2743c4e85ad8b476f5f39a328'
                            sys_user_role: {
                                id: '99f3114296944914992c6ba51250f687'
                                key: {
                                    name: 'x_1526023_lost_and.lost_found_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd80bfb7863404514b7b33caec47e452e'
                        key: {
                            sys_ui_section: {
                                id: '58e456e40e3d4b80bfae83a2bce1fc8e'
                                key: {
                                    name: 'x_1526023_lost_and_claim'
                                    caption: 'Claim Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'verification_state'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd944590ad2cb4221b1f3f55182e87dbb'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'state'
                            value: 'returned'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'db8e90a1a0d84e4c8f1daa18c4b0e349'
                        key: {
                            name: 'x_1526023_lost_and_custody_log'
                            element: 'event'
                            value: 'returned'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'dbcc6c36a1af48398b7ca483147a1cfb'
                        key: {
                            sys_ui_section: {
                                id: '7af0156ee61b439f898696cc7129c1d4'
                                key: {
                                    name: 'x_1526023_lost_and_lost_item'
                                    caption: 'Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'item_title'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dcad68d967f64284b15c92025e902e64'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'category'
                            value: 'keys'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ddd697fbe83f4d38977d24be003be3c6'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dead9e1609504ef3a91a8de47e9892d5'
                        key: {
                            name: 'x_1526023_lost_and_match'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e0c15a90c2f54a3b8ace056f06aea30a'
                        key: {
                            name: 'x_1526023_lost_and_location'
                            element: 'campus_zone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e1d45b09af5f4e04ac8ba3081e929058'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e1f99b62320e4d0889bf2a0f550b1293'
                        key: {
                            name: 'x_1526023_lost_and_custody_log'
                            element: 'timestamp'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e2554614045c4be2a5ff01416b72c5af'
                        key: {
                            name: 'x_1526023_lost_and_match'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e38e166b6ac848f38de3eb31e2008c71'
                        key: {
                            name: 'x_1526023_lost_and_match'
                            element: 'score_breakdown'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e5bdcabb43f74a329c1ef2a5a27765ea'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'category'
                            value: 'book'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e8af642b69d54c0fab7db7fa9c70870f'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'colour'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ea0c39d82e7846baa4a2ba03c7aa30e6'
                        key: {
                            sys_security_acl: 'd374a438c2be4ff7827b7b760fce4f38'
                            sys_user_role: {
                                id: '99f3114296944914992c6ba51250f687'
                                key: {
                                    name: 'x_1526023_lost_and.lost_found_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ea5c5222e75a4a1d99fc28decddc9c2a'
                        key: {
                            sys_security_acl: '1f9d224144f34fdabf87722c9458b8c8'
                            sys_user_role: {
                                id: '99f3114296944914992c6ba51250f687'
                                key: {
                                    name: 'x_1526023_lost_and.lost_found_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eb63d2b6ebae4dccbc08ce0f552cc851'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'brand'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ebe679d1ea734000b10423b6517e690d'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ec2b1410e26044f185c8754b449dfce9'
                        key: {
                            name: 'x_1526023_lost_and_claim'
                            element: 'verification_state'
                            value: 'completed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ee125cb79d7a48a49df50bb8796a5814'
                        key: {
                            name: 'x_1526023_lost_and_claim'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'efb4944c1db0411393039bcc8ef9cf04'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f0f895b500e5423295098f89cd1428bc'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f140eb07f49d4bd78d6defe5b3d5259b'
                        key: {
                            sys_security_acl: '812635172a1a4c79b3f53f9a572c47d7'
                            sys_user_role: {
                                id: '99f3114296944914992c6ba51250f687'
                                key: {
                                    name: 'x_1526023_lost_and.lost_found_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f1bb4ff9af7149749979a139d9662316'
                        key: {
                            sys_security_acl: 'd59c1ee1c7a344cc94663c281cbfea0f'
                            sys_user_role: {
                                id: '99f3114296944914992c6ba51250f687'
                                key: {
                                    name: 'x_1526023_lost_and.lost_found_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f1cef8536a1c47928112c1d36afddcc0'
                        key: {
                            sys_ui_section: {
                                id: 'ce82872a8c8a4fbdb6256191996c968b'
                                key: {
                                    name: 'x_1526023_lost_and_custody_log'
                                    caption: 'Custody Log Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'notes'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f28da0a194f2452db44d69faf5fe89c7'
                        key: {
                            name: 'x_1526023_lost_and_match'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f49f494c71d54f57b881486cfa7c7e21'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'last_seen_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f803c0b8f75b4f4ca2e180da996f5954'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'found_location'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f93ab112107744409003e743a10b844c'
                        key: {
                            name: 'x_1526023_lost_and_claim'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f96ff09d2d2446fcb16032412a29fed3'
                        key: {
                            name: 'x_1526023_lost_and_lost_item'
                            element: 'brand'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fa558abdd2b34bef83d2afdd6bfbf340'
                        key: {
                            sys_ui_section: {
                                id: '7af0156ee61b439f898696cc7129c1d4'
                                key: {
                                    name: 'x_1526023_lost_and_lost_item'
                                    caption: 'Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fc0d09a972394bcc88af0f6bb6fe88e3'
                        key: {
                            name: 'x_1526023_lost_and_found_item'
                            element: 'category'
                            value: 'bag'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fd2720f30092498589c7c429b312db82'
                        key: {
                            sys_ui_section: {
                                id: '7af0156ee61b439f898696cc7129c1d4'
                                key: {
                                    name: 'x_1526023_lost_and_lost_item'
                                    caption: 'Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'colour'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'fd63a21461184aee82dccea8c73de505'
                        key: {
                            name: 'x_1526023_lost_and_location'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fe8a3f13e1284b14b1405d5fcf41e3c6'
                        key: {
                            sys_ui_section: {
                                id: '1ee959e1035442cc9d4c4195141c0426'
                                key: {
                                    name: 'x_1526023_lost_and_found_item'
                                    caption: 'Item Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fe8e4b21a76e4cfd9fcc46aaa7dbba2f'
                        key: {
                            sys_security_acl: 'af17440f07544820b2d44c830ec5de2f'
                            sys_user_role: {
                                id: '99f3114296944914992c6ba51250f687'
                                key: {
                                    name: 'x_1526023_lost_and.lost_found_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'fe9a2ceb767d4c83863737be9ace09b8'
                        key: {
                            sys_ui_form: {
                                id: '402b9519ab364a2e86f59a680d588efc'
                                key: {
                                    name: 'x_1526023_lost_and_found_item'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '848d5a9a75f643c2b7bf44be4d361311'
                                key: {
                                    name: 'x_1526023_lost_and_found_item'
                                    caption: 'Location and Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ff01b21e9cbe4c1595ff1befdb5d6757'
                        key: {
                            name: 'x_1526023_lost_and_match'
                            element: 'band'
                            value: 'high'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                ]
            }
        }
    }
}
