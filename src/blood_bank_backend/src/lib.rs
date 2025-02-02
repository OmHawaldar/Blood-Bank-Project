use candid::{CandidType, Deserialize};
use ic_cdk::storage;
use ic_cdk_macros::{query, update};
use std::collections::HashMap;

// Structure for Donor Information
#[derive(Clone, CandidType, Deserialize)]
struct Donor {
    id: u64,
    name: String,
    blood_type: String,
    contact: String,
}

// Structure for Blood Inventory
#[derive(Clone, CandidType, Deserialize)]
struct BloodUnit {
    blood_type: String,
    quantity: u32,
}

// Structure for Blood Requests
#[derive(Clone, CandidType, Deserialize)]
struct BloodRequest {
    request_id: u64,
    requester_name: String,
    blood_type: String,
    quantity: u32,
    status: String,
}

// Storage Variables
type DonorStorage = HashMap<u64, Donor>;
type BloodInventory = HashMap<String, u32>;
type RequestStorage = HashMap<u64, BloodRequest>;

// Initialize Storage
static mut DONORS: Option<DonorStorage> = None;
static mut BLOOD_INVENTORY: Option<BloodInventory> = None;
static mut REQUESTS: Option<RequestStorage> = None;

#[ic_cdk::init]
fn init() {
    unsafe {
        DONORS = Some(HashMap::new());
        BLOOD_INVENTORY = Some(HashMap::new());
        REQUESTS = Some(HashMap::new());
    }
}

// Register a new donor
#[update]
fn register_donor(id: u64, name: String, blood_type: String, contact: String) -> String {
    let donor = Donor { id, name, blood_type: blood_type.clone(), contact };
    unsafe {
        let donors = DONORS.as_mut().unwrap();
        donors.insert(id, donor);
        
        let inventory = BLOOD_INVENTORY.as_mut().unwrap();
        *inventory.entry(blood_type).or_insert(0) += 1;
    }
    format!("Donor registered successfully!")
}

// Check blood inventory
#[query]
fn check_blood_availability(blood_type: String) -> u32 {
    unsafe {
        let inventory = BLOOD_INVENTORY.as_ref().unwrap();
        *inventory.get(&blood_type).unwrap_or(&0)
    }
}

// Request Blood
#[update]
fn request_blood(request_id: u64, requester_name: String, blood_type: String, quantity: u32) -> String {
    unsafe {
        let inventory = BLOOD_INVENTORY.as_mut().unwrap();
        let available = inventory.get(&blood_type).unwrap_or(&0);
        
        if *available >= quantity {
            *inventory.get_mut(&blood_type).unwrap() -= quantity;
            
            let requests = REQUESTS.as_mut().unwrap();
            let request = BloodRequest {
                request_id,
                requester_name,
                blood_type: blood_type.clone(),
                quantity,
                status: "Approved".to_string(),
            };
            requests.insert(request_id, request);
            return format!("Blood request approved.");
        } else {
            return format!("Insufficient blood units available.");
        }
    }
}

// Get all blood requests
#[query]
fn get_all_requests() -> Vec<BloodRequest> {
    unsafe {
        let requests = REQUESTS.as_ref().unwrap();
        requests.values().cloned().collect()
    }
}

// Get all donors
#[query]
fn get_all_donors() -> Vec<Donor> {
    unsafe {
        let donors = DONORS.as_ref().unwrap();
        donors.values().cloned().collect()
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         