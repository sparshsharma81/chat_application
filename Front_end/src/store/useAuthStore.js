import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-hot-toast";

export const useAuthStore = create((set) => ({
    authUser: null, //initilially we do not no that the user is authenticated or not..so we need to check that...
    //and we gonnal have loading state for that....
    isCheckingAuth: true, //as soon as we refresh our page..we need to check it is authenticated or not..
    //now we need to create a function to check the authentication of the user..

    isSignedIn: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isSigningUp: false,
    
    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check"); //we need not to put localhost:5001/api/ ---because in localhost
            // file we already implemented the localhost ---base urll..so we need not to repeat it... jai shree ram.
            
            // set({authUser:res.data});
            if (res.data && res.data.user) {
                set({ authUser: res.data.user });
            } else {
                set({ authUser: null });
                console.error("Unexpected response structure:", res.data);
            }
        } catch (error) {
            set({authUser:null});
            console.log("Error in checking auth",error);
            toast.error("Authentication check failed. Please try again.");
            
        }finally{
            set({isCheckingAuth:false});
        }
    },
    // setAuthUser: (user) => set({ authUser: user }),
     signup: async (data) => {
    set({isSigningUp:true}); //ham apni signup state ko true kardege
    try {
        const res= await axiosInstance.post("/auth/signup", data);
        toast.success("Account created successfully"); 
        set({authUser:res.data});//the data is authenticated as soon as the user signup
        
    } catch (error) {
        toast.error("ghani dikkat aari see" , error.response.data.message);
        
    }finally{
        set({isSigningUp:false});
    }
},
logout: async () => {
   
    try {
        await axiosInstance.post("/auth/logout");
         set({authUser:null});
         toast.success("pheli fursat mein nikal");
    } catch (error) {
        toast.error("ruka roh yahi", error.response.data.message);
        console.error("Error in logout", error);
    }
},

}));


//the main thing out here is isCheckingAuth..
//basically when the user refresh ...then for a second it will show the loading state.. 
//in the loading state..it will check either the user is authenticated or not.. /--while it is checking..it will show the loading spinner..
//so we need to create a function to check the authentication of the user..





